import axios from 'axios';
import React, { useState } from 'react';

const Form = ({
  itemList, setItemList, peopleList, setPeopleList,
}) => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [personName, setPersonName] = useState('');

  const handleItemSubmit = () => {
    if (item && price) {
      const itemObj = { item, price };
      const items = [...itemList, itemObj];
      setItemList(items);
      setItem('');
      setPrice('');
    } else {
      console.log('item not submitted');
    }
  };

  const handlePersonSubmit = () => {
    if (personName) {
      axios
        .post('/person', {
          name: personName,
          cost: 0,
        })
        .then((response) => {
          const { newPerson } = response.data;
          setPeopleList([...peopleList, newPerson]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('person not submitted');
    }

    setPersonName('');
  };

  console.log('people list', peopleList);
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
          <input type="text" id="person" value={personName} onChange={(event) => setPersonName(event.target.value)} />
        </div>
        <button type="submit" onClick={handlePersonSubmit}>submit</button>
      </div>
    </>
  );
};

export default Form;
