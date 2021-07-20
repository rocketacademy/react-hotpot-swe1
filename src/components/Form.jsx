import React, { useState } from 'react';

// onChange is a local state inside the form
// e.target.value to be saved
const ItemForm = ({ item, setItem }) => {
  // We define the useState here to save the local item name, price value
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  // Save the item name & price
  // Define the item as an object
  const handleItem = () => {
    setItem([...item, { name: itemName, price: itemPrice }]);
    // clearing input after saving into array
    setItemName('');
    setItemPrice('');
    console.log([...item, { name: itemName, price: itemPrice }]);
  };

  return (
    <div>
      <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <input type="number" placeholder="Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
      <button type="button" onClick={handleItem}>Save Item</button>
    </div>
  );
};

const PersonForm = ({ person, setPerson }) => {
  const [personName, setPersonName] = useState('');

  const handlePerson = () => {
    setPerson([...person, { name: personName }]);
    setPersonName('');
    console.log([...person, { name: personName }]);
  };

  return (
    <div>
      <input type="text" placeholder="Person Name" value={personName} onChange={(e) => setPersonName(e.target.value)} />
      <button type="button" onClick={handlePerson}>Save Person</button>
    </div>
  );
};

export default function Form({
  item, person, setPerson, setItem,
}) {
  return (
    <div>
      <ItemForm item={item} setItem={setItem} />
      <PersonForm person={person} setPerson={setPerson} />
    </div>
  );
}

// -- Form()
//     -- ItemForm() -> Item name, item price
//     -- PersonForm() -> person name
