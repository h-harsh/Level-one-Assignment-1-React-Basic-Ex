import React, { useState } from "react";

function CharacterCounter() {
  const [charCount, charCountSet] = useState("");

  function changeHandeler(event) {
    charCountSet(event.target.value);
  }
  return (
    <div className="new">
      <h1>Character counter</h1>
      <textarea rows="7" cols="40" onChange={changeHandeler}>
        {" "}
      </textarea>
      <div> character count {charCount.length}</div>
    </div>
  );
}
export default CharacterCounter;
