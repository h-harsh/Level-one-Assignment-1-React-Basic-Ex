import React, { useState } from "react";

const themes = [
  light = {
    color: "black",
    background: "white"
  },
  (dark = {
    color: "white",
    background: "black"
  })
];
export const DarkMode = () => {
  const [mode, setMode] = useState(themes[0]);

  const handleClick = () => {
    setMode(mode === themes[0] ? themes[1] : themes[0]);
  };

  return (
    <div className="new" style={mode}>
    <h1>Dark Mode toggle</h1>
      <h1>There's a difference in being in motion and being in action</h1>
      <button style={mode} onClick={handleClick}>
        Right
      </button>
    </div>
  );
};
