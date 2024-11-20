import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Toast.css';

const Toast = ({ type, title, message, timeAgo, size }) => {
    return (
      <div className={`toast ${type} ${size}`}>
        <div className="toast-icon">
          {type === 'success' && <FontAwesomeIcon icon={faCheckCircle} />}
          {type === 'error' && <FontAwesomeIcon icon={faExclamationTriangle} />}
          {type === 'notification' && <FontAwesomeIcon icon={faBell} />}
        </div>
        <div className="toast-content">
          <strong>{title}</strong> {timeAgo && <span className="time">{timeAgo}</span>}
          <p>{message}</p>
        </div>
        <button className="toast-close">✖️</button>
      </div>
    );
  };

export default Toast;
