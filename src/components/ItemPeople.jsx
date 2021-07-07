import React, { useState } from 'react';

const ItemPeople = ({ item, peopleList }) => {
  const [personSelected, setPersonSelected] = useState();
  const [paylist, setPayList] = useState([]);

  const handlePersonChange = (event) => {
    setPersonSelected(event.target.value);
  };

  const addPerson = () => {
    setPayList([...paylist, personSelected]);
  };

  const handleSubmit = () => {
    peopleList.forEach((person) => {
      if (paylist.includes(person.name)) {
        person.amount += (Number(item.price) / paylist.length);
      }
    });
  };

  return (
    <div className="item-people-container">
      <div className="item-details">
        <h3>{item.item}</h3>
        <h3>
          $
          {item.price}
        </h3>
      </div>
      <div className="item-people-select">
        <select onChange={handlePersonChange}>
          <option>Select a person</option>
          {peopleList.map((person) => (
            <option>
              {person.name}
            </option>
          ))}
        </select>
      </div>
      <div className="item-button-container">
        <button type="submit" className="item-submit-button" onClick={addPerson}>Add Person</button>
      </div>
      <div className="item-result">
        <ul>
          {paylist.map((person) => (
            <li>{person}</li>
          ))}
        </ul>
      </div>
      <div className="cost-per-person">
        {paylist.length > 0 && (
        <>
          <h3>Cost per person: </h3>
          <h3>{item.price / paylist.length}</h3>
        </>
        )}
      </div>
      <div className="item-submit">
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ItemPeople;
