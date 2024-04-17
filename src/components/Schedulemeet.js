import React from 'react';

const ScheduleMeet = ({ time, date, timezone }) => {
  const handleSchedule = () => {
    // Code to schedule a Google Meet
  };

  return (
    <button onClick={handleSchedule}>
      Schedule Meet
    </button>
  );
};

export default ScheduleMeet;