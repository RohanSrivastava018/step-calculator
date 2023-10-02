import React from 'react';
import './timeinput.css';

const TimeInput = ({ hours, minutes, onHourChange, onMinuteChange }) => {
  return (
    <div className='input-wrapper'>
        <div>
            <label>Hours:</label>
            <br />
            <div className="input">
                <input type="number" value={hours} onChange={onHourChange} />
            </div>
        </div>
        <div>
            <br />
            <label>Minutes:</label>
            <br />
            <div className="input">
                <input type="number" value={minutes} onChange={onMinuteChange} />
            </div>
        </div>
        
    </div>
  );
};

export default TimeInput;