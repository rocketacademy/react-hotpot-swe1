import axios from 'axios';
import React, { useState } from 'react';

const Form = ({
  itemList, setItemList, peopleList, setPeopleList,
}) => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [person, setPerson] = useState('');

  const handleItemSubmit = () => {
    if (item && price) {
      console.log('submit item form');
      const itemObj = { item, price };
      console.log('item obj', itemObj);
      const items = [...itemList, itemObj];
      console.log('items', items);
      setItemList(items);
      setItem('');
      setPrice('');
    } else {
      console.log('item not submitted');
    }
  };

  const handlePersonSubmit = () => {
    if (person) {
      console.log('submit person form');
      const people = [...peopleList, person];
      console.log('people list', people);
      setPeopleList(people);

      axios
        .post('/person', {
          name: person,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('person not submitted');
    }

    setPerson('');
  };

  return (
    <>
      <div className="item-input">
        <h3>item input</h3>
        <div className="item-name">
          <label htmlFor="item">Item: </label>
          <input type="text" id="item" value={item} onChange={(event) => setItem(event.target.value)} />
        </div>
        <div className="item-price">
          <label htmlFor="price">Price: </label>
          <input type="number" step="0.01" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <button type="submit" onClick={handleItemSubmit}>submit</button>
      </div>

      <div className="person-input">
        <h3>person input</h3>
        <div className="person-name">
          <label htmlFor="person">Name: </label>
          <input type="text" id="person" value={person} onChange={(event) => setPerson(event.target.value)} />
        </div>
        <button type="submit" onClick={handlePersonSubmit}>submit</button>
      </div>
    </>
  );
};

export default Form;
