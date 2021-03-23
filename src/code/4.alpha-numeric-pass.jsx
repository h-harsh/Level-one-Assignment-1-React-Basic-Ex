import React, { useState } from "react";

function AlphaNumericPass() {
const [status, setStatus] = useState("");

  const handleChange = (event) => {
    let pass = event.target.value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(pass.match(letterNumber)){
      setStatus(".....✔")
    } else {
      setStatus(".....❌")
    }
  }

  return (
    <div className="new" >
      <h1>Alpha Numeric password checker</h1>
      <p>password should only contain alphabets and numbers</p>
      <label>Enter Password </label>
      <input onChange={() =>  handleChange(event)} />
      <h3>{status}</h3>
    </div>
  );
}
export default AlphaNumericPass;

