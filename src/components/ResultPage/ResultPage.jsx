import React from 'react';
import './resultpage.css'

const ResultPage = ({ stepCount, stepsPerMin }) => {
  return (
    <div className='result-wrapper'>
      <div className="step-info">
        <h2>Total Steps: <span className="step-count">{stepCount}</span></h2>
      </div>
      <div className="steps-per-min">
        <h3>{stepsPerMin} steps/min</h3>
      </div>
    </div>
  );
};

export default ResultPage;
