import React, { useState } from "react";

const tabsArray = ["Home", "About", "Investor"];

export default function SwitchTab() {
  const [status, setStatus] = useState(" ");

  function onClickHand(item) {
    setStatus(item)
  }

  return (
    <div className="new">
    <h1>Switch Tabs</h1>
      {tabsArray.map((item, index) => {
        return (
          <h4
            style={{
              display: "inline-block",
              margin: "1.5rem",
              cursor: "pointer"
            }}
            onClick={() => onClickHand(item)}
          >
            {item}
          </h4>
        );
      })}
      <div style={{ border: '1px solid black',
        display: status === 'Home'? 'block': 'none'}}>
      <h2>Wecome to home page</h2>
      <p>Hardwork beats Talent & Consistency beats Hardwork</p>
      </div>
      <div style={{ border: '1px solid black',
        display: status === 'About'? 'block': 'none'}}>
      <h2>This is About Section</h2>
      <p>The goal is to cross the curve of Platue of latent potential for now</p>
      </div>
      <div style={{ border: '1px solid black',
        display: status === 'Investor'? 'block': 'none'}}>
      <h2>Invetsors Section is</h2>
      <p>By teh way we are self funded</p>
      </div>
    </div>
  );
}
