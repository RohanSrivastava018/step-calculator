import React from 'react';
import './timeinput.css';

const TimeInput = ({ hours, minutes, onHourChange, onMinuteChange, handleInputFocusMinutes, handleInputBlurMinutes, handleInputBlurHour, handleInputFocusHour }) => {
  return (
    <div className='input-wrapper'>
        <div className='hour-wrapper'>
            <label className="time-label" htmlFor="hours"><strong>Hours:</strong></label>
            <br />
            <div className="input">
                <input className='input-box' id='hours' type="number" onFocus={handleInputFocusHour} onBlur={handleInputBlurHour} value={hours} onChange={onHourChange} />
            </div>
        </div>
        <div className='minute-wrapper'>
            <br />
            <label className="time-label" htmlFor="minutes"><strong>Minutes:</strong></label>
            <br />
            <div className="input">
                <input className='input-box' id='minutes' type="number" onFocus={handleInputFocusMinutes} onBlur={handleInputBlurMinutes} value={minutes} onChange={onMinuteChange} />
            </div>
        </div>
        
    </div>
  );
};

export default TimeInput;