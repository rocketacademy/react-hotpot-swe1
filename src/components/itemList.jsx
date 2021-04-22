import React, { useState } from 'react';

const ItemList = ({ itemList, peopleList }) => {
  const [name, setName] = useState(peopleList[0]);
  const [nameList, setNameList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const addName = [...nameList, name];
    console.log(addName);
    console.log('name', name);
    setNameList(addName);
    setName(peopleList[0]);
  };

  const displayItems = itemList.map((element) => (
    <div className="item-display">
      <div>
        {element.item}
        {' '}
        : $
        {element.price}
      </div>

      <select
        id="names"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          console.log('name', event.target.value);
        }}
      >
        {peopleList.map((element, index) => (
          <option value={element}>{element}</option>
        ))}
      </select>
      <button type="submit" onClick={handleSubmit}>add person</button>

    </div>
  ));

  console.log('before render name', name);
  return (
    <div className="item-list">
      <div>
        {displayItems}
      </div>
      <div>
        <ol>
          {nameList.map((element) => (
            <li>{element}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ItemList;
