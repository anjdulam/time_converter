// TimezoneSlider.js
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import moment from 'moment';
import 'moment-timezone';
import '../App.css';
import TimezoneSliderItem from './TimezoneSliderItem';


const TimezoneSlider = () => {
  const [selectedTime, setSelectedTime] = useState(0);
  const [inputTime, setInputTime] = useState('12:00 AM');
  const [selectedTimezones, setSelectedTimezones] = useState([]);
  const [selectedTimezoneTimes, setSelectedTimezoneTimes] = useState([]);
  const [allTimezones, setAllTimezones] = useState([]);

  // Fetch all timezones and initialize options for react-select
  useEffect(() => {
    const timezones = moment.tz.names();
    const options = timezones.map(tz => ({ value: tz, label: tz }));
    setAllTimezones(options);
  }, []);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSelectedTime(newValue);
    setInputTime(formatTime(newValue));
    updateTimes();
  };

  const handleAddTimezone = (options) => {
    setSelectedTimezones(options);
    updateTimes(options);
  };

  const handleRemoveTimezone = (index) => {
    const updatedTimezones = [...selectedTimezones];
    updatedTimezones.splice(index, 1);
    setSelectedTimezones(updatedTimezones);

    const updatedTimezoneTimes = [...selectedTimezoneTimes];
    updatedTimezoneTimes.splice(index, 1);
    setSelectedTimezoneTimes(updatedTimezoneTimes);

    // Re-add removed timezone to dropdown
    setAllTimezones(prevTimezones => [
      ...prevTimezones,
      { value: selectedTimezones[index].value, label: selectedTimezones[index].label }
    ]);
  };



  const updateTimes = (options = selectedTimezones) => {
    const times = options.map(tz => {
      const convert = moment.utc(inputTime, 'hh:mm A');
      return convert.tz(tz.value).format('HH:mm A');
    });
    setSelectedTimezoneTimes(times);
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
        />
      </div>
      <div className="selected-timezones">
        <Select id="options"
          options={allTimezones.filter(option => !selectedTimezones.some(tz => tz.value === option.value))}
          onChange={handleAddTimezone}
          placeholder="Add timezone"
          isMulti={true}
        />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {selectedTimezones.map((timezone, index) => (
            <li key={index} >
              <TimezoneSliderItem
                label={timezone.label}
                selectedTime={selectedTime}
                inputTime={selectedTimezoneTimes[index] || inputTime}
                handleChange={handleChange}
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
