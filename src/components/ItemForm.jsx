import React, { useState } from 'react';

export default function ItemForm({ addItem, addPrice }) {
  // state of input box
  const [itemName, setItemName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  // set item name to whatever user inputs in the box
  const handleItemName = (event) => {
    const inputItem = event.target.value;
    setItemName(inputItem);
  };

  const handlePrice = (event) => {
    const itemPrice = event.target.value;
    setInputPrice(itemPrice);
  };
  const add = () => {
    addItem(itemName, 'item');
    addPrice(inputPrice, 'price');
    setItemName('');
  };

  return (
    <div>
      <label htmlFor="itemName">
        Item Name:
      </label>
      <input id="itemName" value={itemName} onChange={handleItemName} />
      <label htmlFor="price">
        Price:
      </label>
      <input id="price" value={inputPrice} onChange={handlePrice} />
      <button type="submit" className="btn btn-primary" onClick={add}>Submit</button>
    </div>
  );
}
