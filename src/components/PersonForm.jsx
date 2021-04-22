import React, { useState } from 'react';

export default function PersonForm({ addPerson }) {
  // state of input box
  const [personName, setPersonName] = useState('');
  // set item name to whatever user inputs in the box
  const handlePersonName = (event) => {
    const inputItem = event.target.value;
    setPersonName(inputItem);
  };

  const add = () => {
    addPerson(personName, 'person');
    setPersonName('');
  };

  return (
    <div>
      <label htmlFor="personName">
        Person Name:
      </label>
      <input id="personName" value={personName} onChange={handlePersonName} />
      <button type="submit" className="btn btn-primary" onClick={add}>Submit</button>
    </div>
  );
}
