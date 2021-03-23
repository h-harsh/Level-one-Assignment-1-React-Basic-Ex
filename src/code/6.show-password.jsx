import React, { useState } from "react";

function ShowPassword() {
  const [status, setStatus] = useState("password");
  const [buttonText, setButtonText] = useState("show");

  function onClickHand() {
    if (status === "password") {
      setStatus("text");
      setButtonText("show");
    } else {
      setStatus("password");
      setButtonText("hide");
    }
  }

  return (
    <div className="new">
      <h1>Show/Hide Password</h1>
      <input type={status}></input>
      <button onClick={onClickHand}> {buttonText} </button>
    </div>
  );
}
export default ShowPassword;
