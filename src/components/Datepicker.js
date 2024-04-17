import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const Datepicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
    />
  );
};

export default Datepicker;