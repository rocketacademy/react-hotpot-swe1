import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/inputs.jsx';
import ItemList from './components/itemList.jsx';

export default function App() {
  const [billName, setBillName] = useState('');
  const [itemList, setItemList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  let newBill;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(billName);
    if (billName) {
      console.log('billName exists!!');
      axios
        .post('/bill', {
          name: billName,
        })
        .then((response) => {
          console.log(response.data);
          newBill = response.data.newBill;
        })
        .catch((error) => console.log(error));
    } else {
      console.log('nothing entered');
    }
  };

  return (
    <>
      {newBill !== undefined && (
      <div className="create-bill-container">
        <h2 className="create-bill-header">Create Bill</h2>
        <div className="create-bill">
          <form className="create-bill-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="bill">Name of bill :   </label>
              <input
                type="text"
                name="bill"
                id="bill"
                value={billName}
                onChange={(event) => {
                  setBillName(event.target.value);
                }}
              />
            </div>
            <button
              type="submit"
            >
              Add bill !
            </button>
          </form>
        </div>
      </div>
      )}
      <div className="inputs-container">
        <Form itemList={itemList} setItemList={setItemList} peopleList={peopleList} setPeopleList={setPeopleList} />
      </div>
      <div className="item-list-container">
        <ItemList itemList={itemList} peopleList={peopleList} />
      </div>

    </>
  );
}
