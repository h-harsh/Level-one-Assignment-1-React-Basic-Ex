import React, { useState } from "react";

export const ToastHider = () => {
  const [status, setStatus] = useState("block");
  const onClickFun = () => {
    let temp = "none";
    setStatus(temp);
  };
  const onClickFun2 = () => {
    let temp = "block";
    setStatus(temp);
  };

  return (
    <div className="new">
    <h1>Toast Componwnt</h1>
      <div
        style={{
          border: "1px solid black",
          background: "grey",
          color: "white",
          margin: "1rem",
          display: status
        }}
      >
        <h2>We don't make major life's decesions when we suffer from a loss</h2>
        <h3 style={{ color: "black" }}>-Jessica Pearson</h3>
      </div>
      <button onClick={onClickFun}>Hide Toast</button>
      <button onClick={onClickFun2}>Show Toast</button>
    </div>
  );
};
