import React, { useState } from 'react';
import ItemPeople from './ItemPeople.jsx';

const ItemPeopleList = ({ peopleList, itemList }) => (
  itemList.map((item, index) => (
    <ItemPeople key={index} item={item} peopleList={peopleList} />
  ))
);

export default ItemPeopleList;
