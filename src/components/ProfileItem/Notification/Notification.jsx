import React, { useEffect, useState } from 'react';
import './Notification.css';
import { fetchFromPatient } from '../../../actions/api';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await fetchFromPatient('/notifications');
      console.log(data);
      
      if (data.notifications) {
        setNotifications(data.notifications);
      } else {
        throw new Error('No notifications found in response');
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await fetchFromPatient(`/notifications/${id}/mark-read`, {}, 'POST');
      setNotifications(notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      ));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetchFromPatient(`/notifications/${id}/delete`, {}, 'POST');
      setNotifications(notifications.filter(notification => notification._id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <div className="user-notification-card">
      <h2>Notification</h2>
      <div className="user-notification-list">
        {notifications.map(notification => (
          <div key={notification._id} className="user-notification">

            <div className="user-details-head">
              <img src={notification.senderProfilePic || 'default-image-url'} alt="No Profile" />
              <div className="user-details">
                <h2>{notification.senderName}</h2>
                <p>{notification.specialization}</p>
                <p>{notification.message}</p>
              </div>
            </div>

            <div className="user-notification-list-status">
              <span className="user-notification-list-time">{notification.timeAgo}</span>
              <p style={{ color: notification.statusColor }}>{notification.status}</p>
            </div>

            <div className="user-buttons">
              {!notification.read && (
                <button className='btn-Mark-Read' onClick={() => handleMarkAsRead(notification._id)}>Mark as Read</button>
              )}
              <button className='btn-user-delete-buttons' onClick={() => handleDelete(notification._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
