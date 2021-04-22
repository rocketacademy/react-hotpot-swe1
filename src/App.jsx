import React, { useState } from 'react';
import ItemForm from './components/ItemForm.jsx';
import ItemList from './components/ItemList.jsx';
import PersonForm from './components/PersonForm.jsx';
import PersonList from './components/PersonList.jsx';

export default function App() {
  const [item, setItem] = useState('');
  const [person, setPerson] = useState([]);
  const [price, setPrice] = useState('');
  // add item to item list when user submits item
  const addThing = (thing, type) => {
    if (type === 'item') {
      setItem(thing);
    } else if (type === 'person') {
      setPerson([thing, ...person]);
    } else if (type === 'price') {
      setPrice(thing);
    }
  };
  return (
    <div>
      <ItemForm addItem={addThing} addPrice={addThing} />
      <PersonForm addPerson={addThing} />
      <ItemList people={person} price={price} item={item} />
      <PersonList people={person} />
    </div>
  );
}
