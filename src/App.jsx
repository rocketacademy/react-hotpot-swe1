import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/inputs.jsx';
import ItemPeopleList from './components/ItemPeopleList.jsx';
import Cost from './components/Cost.jsx';
import BillForm from './components/BillForm.jsx';

export default function App() {
  const [billName, setBillName] = useState('');
  const [itemList, setItemList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  const [newBill, setNewBill] = useState();

  return (
    <>
      {!newBill ? (
        <BillForm setNewBill={setNewBill} billName={billName} setBillName={setBillName} />
      ) : (
        <>
          <div className="inputs-container">
            <Form itemList={itemList} setItemList={setItemList} peopleList={peopleList} setPeopleList={setPeopleList} />
          </div>
          {itemList.length > 0 && (
            <>
              <div className="item-list-container">
                <ItemPeopleList itemList={itemList} peopleList={peopleList} />
              </div>
              <div>
                <Cost peopleList={peopleList} itemList={itemList} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
