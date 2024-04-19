// // TimezoneSliderItem.js
// import React from 'react';
// const TimezoneSliderItem = ({ label, selectedTime, inputTime, handleChange, handleManualTimeChange }) => {
//   return (
//     <div className="timezone-slider-box">
//       <div className="selected-time">
//         <input type="text" value={inputTime} onChange={handleManualTimeChange} placeholder={`Enter time for ${label}`} />
//         <div>{label}</div>
//       </div>
//       <input type="range" className="form-range" min="0" max="95" id={`customRange_${label}`} value={selectedTime} onChange={handleChange} />
//     </div>
//   );
// };

// export default TimezoneSliderItem;


import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import '../App.css';

const TimezoneSliderItem = ({ label, selectedTime, inputTime, handleChange, handleManualTimeChange }) => {
  return (
    <div className="timezone-slider-box">
      <div className="selected-time">
        {/* Accessible input field with placeholder and connected label */}
        <label htmlFor={`input_${label}`}>{label}</label>
        <input
          type="text"
          id={`input_${label}`}
          value={inputTime}
          onChange={handleManualTimeChange}
          placeholder={`Enter time for ${label}`}
        />
      </div>
      {/* Range input for time selection */}
      <input
        type="range"
        className="form-range"
        id={`customRange_${label}`}
        min="0"
        max="95"
        value={selectedTime}
        onChange={handleChange}
      />
    </div>
  );
};

// PropTypes to ensure correct prop types are passed to component
TimezoneSliderItem.propTypes = {
  label: PropTypes.string.isRequired,
  selectedTime: PropTypes.number.isRequired,
  inputTime: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleManualTimeChange: PropTypes.func.isRequired,
};

export default TimezoneSliderItem;
