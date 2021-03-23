import React, { useState } from "react";
;

function DisableButton() {
const [pass1, setPass1] = useState("")
const [status, setStatus] = useState("false");

  function onChangeHand(e) {
     setPass1(e.target.value);
  }
  function onChangeHand2(e) {
    setStatus(pass1 === e.target.value ? false : true) 
  }
  function onClickHand() {
    console.log(pass1);
  }

  return (
    <div className="new">
      <h1>Enable submit on Password Match </h1>
      <label>password</label>
      <input type="password" onChange={onChangeHand} />
      <label>confirm password</label>
      <input type="password" onChange={onChangeHand2} />
      <button disabled={status} onClick={onClickHand}>
        {" "}
        submitt
      </button>
    </div>
  );
}
export default DisableButton;
