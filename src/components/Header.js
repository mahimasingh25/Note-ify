import React from "react";
import { useState } from "react";

const Header = ({ handleToggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (e) => {
    handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
    setDarkMode(!darkMode);
  };
  return (
    <div className="header">
      <h1 className="header-head">Note-ify</h1>
      <button
        onClick={handleClick}
        className={darkMode ? "toggle dark" : "toggle"}
      ></button>
    </div>
  );
};

export default Header;
