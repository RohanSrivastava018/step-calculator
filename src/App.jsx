import React, { useState } from 'react';
import ActivityInput from './components/ActivityInput/ActivityInput';
import TimeInput from './components/TimeInput/TimeInput';
import ResultPage from './components/ResultPage/ResultPage';
import activityStepMapping from './ActivityMapping';
import './App.css';

const App = () => {
  const [activity, setActivity] = useState('Select an activity...');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [stepCount, setStepCount] = useState(null);

  const activities = Object.keys(activityStepMapping);

  const handleActivityChange = (selectedActivity) => {
    setActivity(selectedActivity);
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
    const stepsPerMin = activityStepMapping[activity];
    if (stepsPerMin) {
      const steps = (hours * 60 + parseInt(minutes)) * stepsPerMin;
      setStepCount(steps);
    } else {
      alert('Activity not found!');
    }
  };


  return (
    <div className="container">
      <h1>Step Calculator</h1>
      <div className="activity-input">
        <ActivityInput 
          activities={activities} 
          selectedActivity={activity} 
          onActivityChange={handleActivityChange} 
        />
      </div>
      <div className="time-input">
        <TimeInput hours={hours} minutes={minutes} onHourChange={handleHourChange} onMinuteChange={handleMinuteChange} />
      </div>
      <button onClick={calculateSteps}>Calculate Steps</button>
      {stepCount !== null && <ResultPage stepCount={stepCount} className="result" />}
    </div>
  );
};

export default App;
