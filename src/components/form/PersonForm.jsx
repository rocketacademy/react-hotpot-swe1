import axios from 'axios';
import React, { useState } from 'react';
import styles from './form.module.css';

function PersonForm(props) {
  const { billId } = props;

  const [person, setPerson] = useState({});
  const [personList, setPersonList] = useState([]);

  const handleNewPerson = () => {
    axios.post('/api/new-person', person)
      .then((newPerson) => {
        const personName = newPerson.data.name;
        const personId = newPerson.data.id;
        const personBillId = newPerson.data.billId;
        console.log(newPerson);
        setPersonList([...personList, { name: personName, id: personId, billId: personBillId }]);
        console.log(personList);
      });
  };

  const people = personList.map((one) => <li>{ one.name}</li>);

  return (

    <div className={styles.form}>
      <input type="text" placeholder="Person Name" onChange={(e) => setPerson({ name: e.target.value, billId })} />
      <button type="submit" className={styles.button} onClick={handleNewPerson}>Submit</button>

      <ul className={styles.ul}>
        {people}
      </ul>
    </div>

  );
}

export default PersonForm;
