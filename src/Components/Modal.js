import React from "react";
import "./Modal.css";

const Modal = ({ show, handleClose, header, description }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2 className="modal-header">{header}</h2>
        <p className="modal-description">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
