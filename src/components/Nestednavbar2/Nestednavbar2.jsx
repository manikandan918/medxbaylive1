import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './nestednavbar.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useSearch } from '../context/context';
import { RiArrowDownSLine } from "react-icons/ri";

const Nestednavbar = () => {
  const [what, setWhat] = useState('');
  const [where, setWhere] = useState('');
  const [whereOptions, setWhereOptions] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredSpecialities, setFilteredSpecialities] = useState([]);
  const [filteredConditions, setFilteredConditions] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showWhatOptions, setShowWhatOptions] = useState(false);
  const [showWhereOptions, setShowWhereOptions] = useState(false);
  const navigate = useNavigate();
  const { setSearchData } = useSearch();

  useEffect(() => {
    populateWhatOptions(); // Fetch all options on load
    populateWhereOptions();
  }, []);

  const populateWhatOptions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/what-options`, { withCredentials: true });
      const { specialities, conditions, doctors } = response.data;
      setSpecialities(specialities);
      setConditions(conditions);
      setDoctors(doctors);
      setFilteredSpecialities(specialities);
      setFilteredConditions(conditions);
      setFilteredDoctors(doctors);
    } catch (error) {
      console.error('Error fetching what options:', error);
    }
  };

  const handleWhatInput = async (event) => {
    const query = event.target.value.toLowerCase();
    setWhat(query);

    if (!query) {
      setFilteredSpecialities(specialities);
      setFilteredConditions(conditions);
      setFilteredDoctors(doctors);
      setShowWhatOptions(true);
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/what-options?search=${encodeURIComponent(query)}`, { withCredentials: true });
      const { specialities: newSpecialities = [], conditions: newConditions = [], doctors: newDoctors = [] } = response.data;

      setFilteredSpecialities(newSpecialities.filter(speciality => speciality.toLowerCase().includes(query)));
      setFilteredConditions(newConditions.filter(condition => condition.toLowerCase().includes(query)));
      setFilteredDoctors(newDoctors.filter(doctor => doctor.name.toLowerCase().includes(query)));
      setShowWhatOptions(true);
    } catch (error) {
      console.error('Error fetching filtered options:', error);
    }
  };

  const handleWhatSelect = (option) => {
    setWhat(option);
    setShowWhatOptions(false);
  };
  const populateWhereOptions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/where-options`, { withCredentials: true });
      const data = response.data;
      const { cities, states, countries } = data;
      setWhereOptions([...cities, ...states, ...countries]);
    } catch (error) {
      console.error('Error fetching where options:', error);
    }
  };
  const handleWhereSelect = (option) => {
    setWhere(option);
    setShowWhereOptions(false);
  };

  const handleFocusWhat = () => setShowWhatOptions(true);
  const handleFocusWhere = () => setShowWhereOptions(true);

  const searchDoctors = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/search-doctors?what=${what}&where=${where}`, { withCredentials: true });
      const doctors = response.data;

      if (doctors && doctors.length > 0) {
        console.log('Navigating with:', { doctors, what, where });
        setSearchData({ doctors, what, where });
        navigate('/Filters');
      } else {
        console.log('No doctors found');
        navigate('/Filters', { state: { doctors, what, where } });
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      navigate('/Filters', { state: { error: 'An error occurred while searching for doctors. Please try again later.' } });
    }
  };

  useEffect(() => {
    if (what !== '' || where !== '') {
      searchDoctors();
    }
  }, [what, where]);

  const renderDropdownItems = () => {
    let hasItems = false;
    return (
      <ul className="dropdown-list what-dropdown">
        {filteredSpecialities.length > 0 && (
          <>
            <li className="dropdown-item disabled" >Specialities</li>
            {filteredSpecialities.map((speciality, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleWhatSelect(speciality)}>
                {speciality}
              </li>
            ))}
            {hasItems = true}
          </>
        )}
        {filteredConditions.length > 0 && (
          <>
            <li className="dropdown-item disabled">Conditions</li>
            {filteredConditions.map((condition, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleWhatSelect(condition)}>
                {condition}
              </li>
            ))}
            {hasItems = true}
          </>
        )}
        {filteredDoctors.length > 0 && (
          <>
            <li className="dropdown-item disabled" >Doctors</li>
            {filteredDoctors.map((doctor, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleWhatSelect(doctor.name)}>
                {doctor.name}
              </li>
            ))}
            {hasItems = true}
          </>
        )}
        {!hasItems && <li className="dropdown-item disabled">No results found</li>}
      </ul>
    );
  };

  return (
    <>
      <div className="nested sticky-top">
        <div className="color-style">
          <Navbar />
        </div>

        <div className="navbar-back">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control-one">
              <label htmlFor="what">What</label>
              <input
                type="text"
                className="width-input"
                id="what"
                value={what}
                onChange={handleWhatInput}
                placeholder="Search Specialities, providers or conditions"
                onFocus={handleFocusWhat}
                onBlur={() => setTimeout(() => setShowWhatOptions(false), 200)}
                autoComplete="off"
              />
              {showWhatOptions && renderDropdownItems()}
            </div>

            <div className="form-control-two">
              <label htmlFor="where">Where</label>
              <input
                className="width-input"
                id="where"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                placeholder="United Arab Emirates"
                onFocus={handleFocusWhere}
                onBlur={() => setTimeout(() => setShowWhereOptions(false), 200)}
                autoComplete="off"
              />
              {showWhereOptions && (
                <ul className="dropdown-list where-dropdown">
                  {whereOptions
                    .filter(option => option.toLowerCase().includes(where.toLowerCase()))
                    .map((option, index) => (
                      <li key={index} className="dropdown-item" onMouseDown={() => handleWhereSelect(option)}>
                        {option}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <button type="submit" className="btn button-color">
              Find My Provider
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Nestednavbar;
