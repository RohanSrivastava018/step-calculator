import React from 'react';
import './resultpage.css'

const ResultPage = ({ stepCount }) => {
  return (
    <div className='result-wrapper'>
      <h2>Total Steps:</h2>
      <div className="step-count">
        <h2>{stepCount}</h2>
      </div>
    </div>
  );
};

export default ResultPage;