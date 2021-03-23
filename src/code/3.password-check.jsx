import React, { useState } from "react";

const PasswordCheck = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = () => {
    setStatus(pass1 === pass2 ? "Password matches" : "Password do not match");
  };
  return (
    <div className="new">
      <h1>Password Match </h1>
      <label>Enter Password</label>
      <input type="password" onChange={(event) => setPass1(event.target.value)} />
      <label>ReEnter Password</label>
      <input type="password" onChange={(event) => setPass2(event.target.value)} />
      <button onClick={handleClick}>Check</button>
      <p>{status}</p>
    </div>
  );
};
export default PasswordCheck;
