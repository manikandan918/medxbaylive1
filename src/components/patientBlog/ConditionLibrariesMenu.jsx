import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate on condition click
import axios from 'axios';
import condtionLibImage from './ConditionLibImage.png';
import asthma from '../../assests/asthma-condition.jpg'
import './ConditionLibrariesMenu.css'

const Conditions = () => {
    const [popularConditions, setPopularConditions] = useState([]);
    const [allConditions, setAllConditions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // To handle navigation

    useEffect(() => {
        const fetchConditions = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/patient/blogs/conditions`, {
                    withCredentials: true
                });
                setAllConditions(response.data.conditions);
            } catch (err) {
                console.error('Error fetching conditions:', err);
            }
        };
        fetchConditions();
    }, []);

    useEffect(() => {
        const popular = allConditions.slice(0, 6);
        setPopularConditions(popular);
    }, [allConditions]);

    const filteredConditions = allConditions.filter(condition =>
        condition.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle condition click
    const handleConditionClick = (conditionName) => {
        navigate(`/condition-libraries/${conditionName}`); // Navigate to the individual condition page
    };

    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-8'>
                    <img src={condtionLibImage} alt="Condition Library" />
                    <div className="mb-5">
                        <h2 className="condition-lib-head1">Conditions <span>Libraries </span></h2>
                        <p className="condition-lib-info">Find information on symptoms, diagnosis, and treatment options to discuss with your doctor.</p>
                    </div>

                    <h2 className="popular-conditions-heading">Popular Conditions</h2>
                    <div className="row g-4 mb-5">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className=" h-100" onClick={() => handleConditionClick('Asthma')}>
                                <img src={asthma} className="card-img-top" alt={'asthma'} />
                                <div className="popular-condition">
                                    <h5 className="popular-condition-name my-4 mx-1">{'Asthma'}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className=" h-100" onClick={() => handleConditionClick('Diabetes')}>
                                <img src={asthma} className="card-img-top" alt={'Diabetes'} />
                                <div className="popular-condition">
                                    <h5 className="popular-condition-name my-4 mx-1">{'Diabetes'}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className=" h-100" onClick={() => handleConditionClick('Viral Infections')}>
                                <img src={asthma} className="card-img-top" alt={'Viral Infections'} />
                                <div className="popular-condition">
                                    <h5 className="popular-condition-name my-4 mx-1">{'Viral Infections'}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className=" h-100" onClick={() => handleConditionClick("Women's Health")}>
                                <img src={asthma} className="card-img-top" alt={"Women's Health"} />
                                <div className="popular-condition">
                                    <h5 className="popular-condition-name my-4 mx-1">{"Women's Health"}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className=" h-100" onClick={() => handleConditionClick("Men's Health")}>
                                <img src={asthma} className="card-img-top" alt={"Men's Health"} />
                                <div className="popular-condition">
                                    <h5 className="popular-condition-name my-4 mx-1">{"Men's Health"}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className=" h-100" onClick={() => handleConditionClick('Brain and Nerves')}>
                                <img src={asthma} className="card-img-top" alt={'Brain and Nerves'} />
                                <div className="popular-condition">
                                    <h5 className="popular-condition-name my-4 mx-1">{'Brain and Nerves'}</h5>
                                </div>
                            </div>
                        </div>
                        {/* {popularConditions.map((condition, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className=" h-100" onClick={() => handleConditionClick(condition.name)}>
                                    <img src={condition.img || asthma} className="card-img-top" alt={condition.name} />
                                    <div className="popular-condition">
                                        <h5 className="popular-condition-name my-4 mx-1">{condition.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                    </div>

                    <div className=" pt-4">
                        <div className='allConditionsConditionLibraries'>
                            <h1 className="allConditions-Conlib mb-4">See All</h1>
                        </div>
                        <div className="FindConditionsConLib mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Find conditions"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="row allConditionsLib mb-4">
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    {filteredConditions.slice(0, Math.ceil(filteredConditions.length / 2)).map((condition, index) => (
                                        <li key={index} className="mb-3" onClick={() => handleConditionClick(condition.name)}>
                                            {condition.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    {filteredConditions.slice(Math.ceil(filteredConditions.length / 2)).map((condition, index) => (
                                        <li key={index} className="mb-3" onClick={() => handleConditionClick(condition.name)}>
                                            {condition.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Conditions;
