// TimezoneSlider.js
import React, { useState } from 'react';
import Select from 'react-select';
import moment from 'moment';
import 'moment-timezone';

import TimezoneSliderItem from './TimezoneSliderItem';

const TimezoneSlider = () => {
  const [selectedTime, setSelectedTime] = useState(0);
  const [inputTime, setInputTime] = useState('');
  const [selectedTimezones, setSelectedTimezones] = useState([]);
  const [selectedTimezoneTimes, setSelectedTimezoneTimes] = useState([]);
  const [allTimezones, setAllTimezones] = useState([]);

  // Fetch all timezones and initialize options for react-select
  useState(() => {
    const timezones = moment.tz.names();
    const options = timezones.map(tz => ({ value: tz, label: tz }));
    setAllTimezones(options);
  }, []);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSelectedTime(newValue);
    setInputTime(formatTime(newValue));
  };

  const handleManualTimeChange = (e) => {
    // Handle manual time change
  };
  const handleAddTimezone = (selectedOption) => {
    const updatedTimezones = [...selectedTimezones, selectedOption];
    setSelectedTimezones(updatedTimezones);
  
    console.log('selectedTime:', selectedTime);
    
    // Ensure that selectedTime has a valid value before using it
    if (selectedTime !== undefined && selectedTime !== null) {
      // Calculate converted time for the added timezone
      const selectedTimezone = selectedOption.value;
      console.log('selectedTimezone:', selectedTimezone);
      
      const convertedTime = moment.utc(selectedTime).tz(selectedTimezone).format('h:mm a');
  
      // Update the selectedTimezoneTimes state array with the new converted time
      setSelectedTimezoneTimes([...selectedTimezoneTimes, convertedTime]);
    } else {
      console.error('Error: selectedTime is not set.');
    }
  };
  
  

  const handleRemoveTimezone = (index) => {
    const updatedTimezones = [...selectedTimezones];
    updatedTimezones.splice(index, 1);
    setSelectedTimezones(updatedTimezones);

    // Update converted time state when removing a timezone
    const updatedTimezoneTimes = [...selectedTimezoneTimes];
    updatedTimezoneTimes.splice(index, 1);
    setSelectedTimezoneTimes(updatedTimezoneTimes);
  };

  const formatTime = (value) => {
    let hours = Math.floor(value / 4);
    let minutes = (value % 4) * 15;
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  };

  return (
    <div className="timezone-slider-container container">
      <div className="timezone-slider-box">
        {/* Universal Time Coordinated slider */}
        <TimezoneSliderItem
          label="Universal Time Coordinated"
          selectedTime={selectedTime}
          inputTime={inputTime}
          handleChange={handleChange}
          handleManualTimeChange={handleManualTimeChange}
        />
      </div>
      <div className="selected-timezones">
        <Select
          options={allTimezones.filter(option => !selectedTimezones.some(tz => tz.value === option.value))}
          onChange={handleAddTimezone}
          placeholder="Add timezone"
          isMulti={true}
        />
        <button className="btn btn-primary" onClick={() => handleAddTimezone(selectedTimezones)}>Add</button>
        <ul>
          {/* Render timezone sliders */}
          {selectedTimezones.map((timezone, index) => (
            <li key={index}>
              <TimezoneSliderItem
                label={timezone.label}
                selectedTime={selectedTime}
                inputTime={selectedTimezoneTimes[index]}
                handleChange={handleChange}
                handleManualTimeChange={handleManualTimeChange}
              />
              <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTimezone(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimezoneSlider;
