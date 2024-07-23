/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Modal2.css';

const Modal2 = ({ show, onClose, data }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={data.image} alt={data.name} className="modal-image" />
                <h2>{data.name}</h2>
                <p>{data.content}</p>
                <p><strong>Genre:</strong> {data.decs}</p>
            </div>
        </div>
    );
};

export default Modal2;