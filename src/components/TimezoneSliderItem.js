// TimezoneSliderItem.js
import React from 'react';

const TimezoneSliderItem = ({ label, selectedTime, inputTime, handleChange, handleManualTimeChange }) => {
  return (
    <div className="timezone-slider-box">
      <div className="selected-time">
        <input type="text" value={inputTime} onChange={handleManualTimeChange} placeholder={`Enter time for ${label}`} />
        <div>{label}</div>
      </div>
      <input type="range" className="form-range" min="0" max="95" id={`customRange_${label}`} value={selectedTime} onChange={handleChange} />
    </div>
  );
};

export default TimezoneSliderItem;
