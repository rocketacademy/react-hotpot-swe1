import React, { useState } from "react";
import axios from "axios";

import BillForm from "./components/BillForm.jsx";
import InfoInput from "./components/InfoInput.jsx";
import ItemList from "./components/ItemList.jsx";
import Total from "./components/Total.jsx";

export default function App() {
  const [billIndex, setBillIndex] = useState();
  const [items, setItems] = useState([]);
  const [people, setPeople] = useState([]);
  const [total, setTotal] = useState(0);

  const updatePeople = (person, amount) => {
    axios
      .put("person", { person, amount })
      .then((result) => {
        console.log("updated");
      })
      .catch((error) => console.log(error));
  };

  // const addPayeeToItem = (item, payee) => {
  //   item.payees;
  // };

  const updateTotal = (sum) => {
    axios
      .put("bill", { sum, billIndex })
      .then((result) => {
        setTotal(sum);
        console.log("bill updated");
      })
      .catch((error) => console.log(error));
  };

  const setTopBill = (inputIndex) => {
    setBillIndex(inputIndex);
  };

  const addPerson = (name) => {
    axios
      .post("/person", { name, billIndex })
      .then((result) => {
        console.log("posted");
        setPeople([...people, name]);
      })
      .catch((error) => console.log(error));
  };

  const addToList = (item, price) => {
    console.log(`item received: ${item}`);
    console.log(`price received: ${price}`);
    const newItem = { item, price, payees: [] };
    setItems([...items, newItem]);
  };

  console.log(`Bill index: ${billIndex}`);
  console.log(`~~~~ List of items ~~~~`);
  items.forEach((item) => {
    console.log(`${item.item} at $${item.price}`);
  });

  console.log(`~~~~ List of people ~~~~`);
  people.forEach((person) => {
    console.log(`${person}`);
  });

  return (
    <div className="container mt-4">
      {!billIndex && <BillForm sendBillIndex={setTopBill} />}
      {billIndex && (
        <InfoInput addItemToTop={addToList} addPersonToTop={addPerson} />
      )}
      <div className="row mb-4">
        <div className="col-8">
          {billIndex && (
            <ItemList
              items={items}
              people={people}
              updatePeople={updatePeople}
            />
          )}
        </div>
        <div className="ml-2 col-4">
          {billIndex && (
            <Total
              items={items}
              updateTotal={updateTotal}
              billIndex={billIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
}
