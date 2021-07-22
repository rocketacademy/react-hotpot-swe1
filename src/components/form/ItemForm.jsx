import axios from 'axios';
import React from 'react';
import styles from './form.module.css';

function ItemForm(props) {
  const { currentBillId } = props;

  const handlePriceItemUpdate = () => {
    axios.post('/api/add-bill', { id: currentBillId, item, price });
  };

  return (

    <div className={styles.form}>
      <input type="text" placeholder="dish" name="dish" />
      <input type="text" placeholder="price" name="price" />
      <button type="submit" className={styles.button}>Submit</button>
    </div>

  );
}

export default ItemForm;
