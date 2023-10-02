import React from 'react';
import Select from 'react-select';
import './activityinput.css';

const ActivityInput = ({ activities, selectedActivity, onActivityChange }) => {
    const options = [
        { label: selectedActivity, value: selectedActivity},  // Add default option here
        ...activities.map(activity => ({ label: activity, value: activity }))
      ];

  return (
    <div className='activity-input-wrapper'>
      <label>Activity:</label>
      <div className="input">
            <Select
                options={options}
                value={{ label: selectedActivity, value: selectedActivity }}
                onChange={(selectedOption) => onActivityChange(selectedOption.value)}
            />
      </div>
    </div>
  );
};

export default ActivityInput;
