import React, { useState } from "react";
const list = [
  {
    id: 1,
    name: "Printer"
  },
  {
    id: 2,
    name: "Smart Bulb"
  },
  {
    id: 3,
    name: "Note Book"
  },
  {
    id: 4,
    name: "White Board"
  }
];

const ListItems = ({ item }) => {
  const [like, setlike] = useState("🤍");
  const onClickHandeler = (event) => {
    setlike(like === "🤍" ? "❤️" : "🤍");
  };
  return (
    <div>
      <h3 style={{ display: "inline-block", marginRight: "1rem" }}>
        {item.name}
      </h3>
      <button key={item.id} onClick={onClickHandeler}>
        {" "}
        {like}{" "}
      </button>
    </div>
  );
};

export const LikeList = () => {
  return (
    <div className="new">
      <h1>Like in a List</h1>
      {list.map((item) => {
        return <ListItems item={item} />;
      })}
    </div>
  );
};
