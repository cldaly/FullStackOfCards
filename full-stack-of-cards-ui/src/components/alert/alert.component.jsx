import React from 'react';
import './alert.styles.css';

export const Alert = ({message, closeAlert}) => (
    <div className="error-alert" onClick={closeAlert}>
        <p>{ message }</p>
        <span className='close'>close</span>
    </div>
)