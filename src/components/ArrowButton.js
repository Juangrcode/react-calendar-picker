import React from 'react';
import '../styles/components/ArrowButton.css';

const ArrowButton = ({ onClick, isDown = false, disabled }) => (
    <button type="button" onClick={onClick} disabled={disabled} className={`picker__items--arrow ${isDown ? 'arrow-down' : 'arrow-up'}`}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.98 8.67456L6.99 2L1 8.67456" stroke="#1C24F2" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
    </button>
);

export default ArrowButton;
