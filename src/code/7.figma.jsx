import React, { useState } from "react";

function FigmaTool() {
  const [status, setstatus] = useState(24);
  const fontTap = {
    background: "red",
    fontSize: `${status}px`
  };

  function onClickPlus() {
    let temp = status + 8;
    setstatus(temp);
  }
  function onClickLess() {
    let temp = status - 8;
    setstatus(temp);
  }

  return (
    <div className="new">
    <h1>Mini figma</h1>
      <button onClick={onClickPlus}>Add 8px</button>
      <button onClick={onClickLess}>Subtract 8px</button>
      <p style={fontTap}>Hello this is sample text</p>
    </div>
  );
}
export default FigmaTool;
