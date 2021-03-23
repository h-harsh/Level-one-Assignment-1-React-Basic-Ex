import React, { useState } from "react";

export const TodoApp = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const clickToList = () => {
    setList((prev) => [...prev, item]);
    setItem("");
  };

  function ToDoItem({ item }) {
    const [done, setDone] = useState(false);
    const clickToCut = (item) => {
      setDone(done === false ? true : false);
    };

    return (
      <div>
        <p
          onClick={() => clickToCut(item)}
          style={{
            display: "inline-block",
            marginRight: "1rem",
            textDecoration: done === false ? "initial" : "line-through"
          }}
        >
          {item}{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="new">
      <div>
        <h1>Things ToDo</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder={"Task to be done..."}
          value={item}
        />
        <button onClick={clickToList}>Add </button>
      </div>
      <div>
        <h3>Items list</h3>
        {list.map((item) => {
          return <ToDoItem item={item} />;
        })}
      </div>
    </div>
  );
};
