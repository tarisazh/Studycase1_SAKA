import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, size }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal-container ${size}`}>
        <button className="modal-close" onClick={onClose}>
          ✖️
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
