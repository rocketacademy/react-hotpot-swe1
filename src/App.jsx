import React, { useState } from "react";

import BillForm from "./components/BillForm.jsx";
import InfoInput from "./components/InfoInput.jsx";

export default function App() {
  const [billIndex, setBillIndex] = useState();
  const [items, setItems] = useState([]);

  const setTopBill = (inputIndex) => {
    setBillIndex(inputIndex);
  };

  const addToList = (item, price) => {
    console.log(`item received: ${item}`);
    console.log(`price received: ${price}`);
    const newItem = { item, price };
    setItems([...items, newItem]);
  };

  console.log(`Bill index: ${billIndex}`);
  console.log(`List of items: ${items}`);
  items.forEach((item) => {
    console.log(`${item.item} at $${item.price}`);
  });

  return (
    <div className="container mt-4">
      <BillForm sendBillIndex={setTopBill} />
      <InfoInput addItemToTop={addToList} />
    </div>
  );
}
