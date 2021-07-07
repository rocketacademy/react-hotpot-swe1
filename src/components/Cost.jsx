import axios from 'axios';
import React, { useState } from 'react';

const Cost = ({ peopleList, itemList }) => {
  const [showAmounts, setShowAmounts] = useState(false);

  let totalCost = 0;
  itemList.forEach((item) => {
    totalCost += Number(item.price);
  });

  const CalculateTotalPerPerson = () => {
    console.log(peopleList);
    axios
      .post('/mealCost', {
        peopleList,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return (
      <>
        {peopleList.map((person) => (
          <h4>
            {person.name}
            {' '}
            :
            {' '}
            $
            {person.amount}
          </h4>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="cost-total">
        <h3>
          Total Cost: $
          {totalCost}
        </h3>
        <div>
          <div>
            <button type="submit" onClick={() => setShowAmounts(true)}>calculate cost per person and save bill</button>
          </div>
          {showAmounts && (
          <CalculateTotalPerPerson />
          )}
        </div>
      </div>
    </>
  );
};

export default Cost;
