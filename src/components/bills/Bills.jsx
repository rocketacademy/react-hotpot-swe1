import axios from 'axios';
import React, { useState } from 'react';
import styles from './bills.module.css';

function Bills(props) {
  const { showOrHide, newBills } = props;

  const [newBill, setNewBill] = useState({});

  const handleNewBill = () => {
    axios.post('/new-bill',
      newBill)
      .then(({ data }) => {
        console.log('this is id returned after save --> ', data);
        newBills(data);
      });
    //  STORE BILL ID IN COOKIE
    console.log(newBill);
  };

  return (
    <div className={styles.form}>
      <input onChange={(e) => setNewBill({ name: e.target.value })} />
      <button onClick={() => { showOrHide(); handleNewBill(); }} type="submit" className={styles.button}>Create new bill</button>
    </div>
  );
}

export default Bills;
