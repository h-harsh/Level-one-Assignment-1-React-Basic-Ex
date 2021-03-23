import React, { useState } from "react";

let products = [
  {
    pid: 1,
    itemName: "Printer"
  },
  {
    pid: 2,
    itemName: "Smart Bulb"
  },
  {
    pid: 3,
    itemName: "Note Book"
  },
  {
    pid: 4,
    itemName: "White Board"
  }
];

function AddToCart() {
  const [cart, setCart] = useState([]);

  function onClickHandler(item) {
    let flag = 1;

    for (let i = 0; i < cart.length; i++) {
      if (item.pid === cart[i].pid) {
        flag = 0;
        let obj = { ...item, qty: cart[i].qty + 1 };
        let tempList = cart.filter((cartItem) => {
          return cartItem.pid !== item.pid;
        });
        setCart([...tempList, obj]);
      }
    }

    if (flag) {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }

  return (
    <div className="new">
    <h1>Add To Cart</h1>
      <h2>Store</h2>
      {products.map((item) => {
        return (
          <div>
            <h3>{item.itemName}</h3>
            <button onClick={() => onClickHandler(item)}>Add To Cart</button>
          </div>
        );
      })}
      <h2>Cart</h2>
      {cart.map((item) => {
        return (
          <div>
            <h3>{item.itemName}</h3>
            <h3>{item.qty}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default AddToCart;
