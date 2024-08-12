import React, { useState, useEffect } from 'react';
import { MdOutlineCalendarToday } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './manageappointment.css';

const ManageAppointments = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [statuses, setStatuses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8000/doctor/bookings', {
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error fetching data:', errorText);
          return;
        }

        const data = await response.json();
        setStatuses(data.bookings.map(booking => ({
          id: booking._id,
          patientName: booking.patient ? booking.patient.name : 'Unknown Patient',
          consultationType: booking.consultationType || 'Unknown Type',
          date: new Date(booking.date).toLocaleDateString(),
          time: booking.time,
          status: booking.status.charAt(0).toUpperCase() + booking.status.slice(1),
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setSelectedStatus(prev => ({ ...prev, [id]: newStatus }));
  };

  const confirmAndUpdateStatus = async (id) => {
    const newStatus = selectedStatus[id];
    if (window.confirm(`Are you sure you want to change the status to ${newStatus}?`)) {
      try {
        const response = await fetch(`http://localhost:8000/doctor/bookings/${id}`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ status: newStatus })
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error updating status:', errorText);
          alert('Failed to update status. Please try again.');
          return;
        }

        setStatuses(statuses.map(status => status.id === id ? { ...status, status: newStatus } : status));
      } catch (error) {
        console.error('Error updating status:', error);
        alert('Failed to update status. Please try again.');
      }
    }
  };

  const filteredStatuses = activeTab === 'All' ? statuses : statuses.filter(status => status.status === activeTab);

  return (
    <div className="dashboard-appointments">
      <h2>All Appointments</h2>
      <div className="dashboard-tabs-container">
        <div className="tabs-button">
          <button className={`tab-side ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
          <button className={`tab-side ${activeTab === 'Waiting' ? 'active' : ''}`} onClick={() => setActiveTab('Waiting')}>Waiting</button>
          <button className={`tab-side ${activeTab === 'Accepted' ? 'active' : ''}`} onClick={() => setActiveTab('Accepted')}>Accepted</button>
          <button className={`tab-side ${activeTab === 'Rejected' ? 'active' : ''}`} onClick={() => setActiveTab('Rejected')}>Rejected</button>
          <button className={`tab-side ${activeTab === 'Completed' ? 'active' : ''}`} onClick={() => setActiveTab('Completed')}>Completed</button>
        </div>
        <button className="dashboard-calendar-button">
          <MdOutlineCalendarToday />
          Calendar
        </button>
      </div>
      <div className='manage-appointments-table-container'>
        <table className="manage-appointments-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Consultation Type</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
              <th>Update Status</th> 
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {filteredStatuses.map(({ id, patientName, consultationType, date, time, status }) => (
              <tr key={id}>
                <td>{patientName}</td>
                <td>{consultationType}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>
                  <span className={`status-dot ${status.toLowerCase()}`}></span>
                </td>
                <td>
                  <div className="select-container">
                    <select
                      className={`status-select ${status.toLowerCase()}`}
                      value={selectedStatus[id] || status.toLowerCase()}
                      onChange={(e) => handleStatusChange(id, e.target.value)}
                    >
                      <option value="waiting">Waiting</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                      <option value="completed">Completed</option>
                    </select>
                    <RiArrowDownSLine className="arrow-icon" />
                  </div>
                </td>
                <td>
                  <IoIosCheckmarkCircleOutline 
                    className="tick-icon" 
                    onClick={() => confirmAndUpdateStatus(id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAppointments;