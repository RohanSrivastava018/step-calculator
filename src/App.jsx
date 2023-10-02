import React, { useState, useEffect } from 'react';
import ActivityInput from './components/ActivityInput/ActivityInput';
import TimeInput from './components/TimeInput/TimeInput';
import ResultPage from './components/ResultPage/ResultPage';
import activityStepMapping from './ActivityMapping';
import './App.css';

const App = () => {
  const [activity, setActivity] = useState('Search activity...');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [stepCount, setStepCount] = useState(null);
  const [containerPadding, setContainerPadding] = useState('50px 100px');
  const [stepsPerMin, setStepsPerMin] = useState(null)

  const activities = Object.keys(activityStepMapping);


  const handleActivityChange = (selectedActivity) => {
    setActivity(selectedActivity);
    setStepsPerMin(activityStepMapping[selectedActivity]);
  };

  const handleHourChange = (e) => {
    setHours(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setMinutes(e.target.value);
  };

  const calculateSteps = () => {
    if (activity === 'Select an activity...' ) {
      alert('Please select an activity!')
      return
    }
    setContainerPadding(stepCount !== null ? '100px 100px': '50px 100px');
    if (stepsPerMin != null) {
      if (hours === 0 & minutes === 0) {
        alert('Please enter time!');
      } else {
        const steps = (hours * 60 + parseInt(minutes)) * stepsPerMin;
        setStepCount(steps.toLocaleString());
      }
    } else {
      alert('Activity not found!');
    }
  };

  useEffect(() => {
    setContainerPadding(stepCount !== null ? '100px 100px' : '50px 100px');
  }, [stepCount]);

  const handleInputFocusMinutes = () => {
    const minutesLabel = document.querySelector('.time-label[for="minutes"]');
    minutesLabel.classList.add('hover');
  };
  
  const handleInputBlurMinutes = () => {
    const minutesLabel = document.querySelector('.time-label[for="minutes"]');
    minutesLabel.classList.remove('hover');
  };

  const handleInputFocusHour = () => {
    const hoursLabel = document.querySelector('.time-label[for="hours"]');
    hoursLabel.classList.add('hover');
  };
  
  const handleInputBlurHour = () => {
    const hoursLabel = document.querySelector('.time-label[for="hours"]');
    hoursLabel.classList.remove('hover');
  };


  return (
    <div className="wrapper">
      <div className="container" style={{padding: containerPadding}}>
        <div className="title">
            <h1>Step Calculator</h1>
        </div>
      
        <div className="activity-input">
          <ActivityInput 
            activities={activities} 
            selectedActivity={activity} 
            onActivityChange={handleActivityChange} 
          />
        </div>
        <div className="time-input">
          <TimeInput hours={hours} 
                    minutes={minutes} 
                    onHourChange={handleHourChange} 
                    onMinuteChange={handleMinuteChange} 
                    handleInputBlurMinutes={handleInputBlurMinutes} 
                    handleInputFocusMinutes={handleInputFocusMinutes}
                    handleInputBlurHour={handleInputBlurHour}
                    handleInputFocusHour={handleInputFocusHour} />
        </div>
        <button className='calculate-button' onClick={calculateSteps}><strong>Calculate Steps</strong></button>
        {stepCount !== null && <ResultPage stepCount={stepCount} stepsPerMin={stepsPerMin} className="result" />}
      </div>
    </div>
  );
};

export default App;
