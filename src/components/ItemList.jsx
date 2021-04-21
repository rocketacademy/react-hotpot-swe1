import React, { useState } from "react";
import axios from "axios";

function Item({ name, price }) {
  return (
    <div className="row">
      <div className="col-9">{name}</div>
      <div className="col-3">{price}</div>
    </div>
  );
}

export default function ItemList({ items, people }) {
  const personList = people.map((person) => {
    <option value={person}>{person}</option>;
  });

  const jsxItems = items.map((item) => {
    <div>
      <Item name={item.name} price={item.price} />
      <div className="row">
        <div className="col-9">
          <select name="people" id="">
            {personList}
          </select>
        </div>
        <div className="col-3"></div>
      </div>
    </div>;
  });

  return (
    <div className="row">
      <h1>ItemList</h1>
      <div id="item-table">{/* {jsxItems} */}</div>
      <div id="person-list"></div>
    </div>
  );
}
