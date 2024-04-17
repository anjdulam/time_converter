import React, { useState } from 'react';

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    onToggle(!darkMode);
  };

  return (
    <button onClick={handleClick}>
      {darkMode? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;