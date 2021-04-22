import React, { useState } from 'react';
import axios from 'axios';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

export default function ItemList({ people, item, price }) {
  const [chosenPerson, setChosenPerson] = useState('');
  const personDropDown = people.map((person) => <option value={person}>{person}</option>);

  const handleChosenPerson = (event) => {
    const person = event.target.value;
    setChosenPerson(person);
  };

  // add person to database tgt with relevant information
  const handleClick = () => {
    axios.post('/new-person', {
      name: chosenPerson,
      amount: price,
      billId: id,
    });
  };
  return (
    <div>
      <div>
        <p>
          Item:
          {' '}
          {item}
        </p>
        <p>
          Price:
          {' '}
          {price}
        </p>
      </div>
      <label htmlFor="person">Select Person:</label>
      <select name="person" id="person" onChange={handleChosenPerson}>
        <option>---Select Person ---</option>
        {personDropDown}
      </select>
      <button type="submit" onClick={handleClick}>Add</button>
    </div>
  );
}
