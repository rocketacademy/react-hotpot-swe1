/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import styles from './app.module.css';

import Bills from './components/bills/Bills.jsx';
import ItemForm from './components/form/ItemForm.jsx';
import PersonForm from './components/form/PersonForm.jsx';

export default function App() {
  //  Tabs show or hide
  const [show, setShow] = useState(false);
  const [currentBillId, setCurrentBillId] = useState();
  //  State data for main app

  //  Show or hide new bill component
  const handleShowOrHide = () => {
    !show ? setShow(true) : setShow(false);
    console.log(show);
  };
  //  passed to <Bills/> to toggle display (causes to hide)
  const handleDisplay = () => {
    setShow(false);
  };

  //  Set state for new bill
  const handleCreateNewBill = (id) => {
    setCurrentBillId({ id });
  };

  //  Button text based on show/hide
  const text = show ? 'Close' : 'Start new bill';

  //  This gets me the id after creating a new bill
  //  Use this id to fetch data about bill from DB
  useEffect(() => {
    console.log(currentBillId);
  }, [currentBillId]);

  const forms = (
    <div>
      <ItemForm billId={currentBillId} />
      <PersonForm billId={currentBillId} />
    </div>

  );

  return (
    <>
      <div className={show ? styles.show : styles.hide}>
        <Bills css={show} showOrHide={handleDisplay} newBills={handleCreateNewBill} />
      </div>

      <p className={show ? styles.show : styles.hide}>Hungry People Alert</p>
      <button onClick={handleShowOrHide} type="button">{text}</button>

      <div className={!show ? styles.show : styles.hide}>

        {currentBillId ? forms : ''}

      </div>

    </>

  );
}
