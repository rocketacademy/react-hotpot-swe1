import React, { useState } from "react";
import axios from "axios";

export default function Total({ items, updateTotal, billIndex }) {
  let sum = 0;

  items.forEach((item) => {
    sum += Number(item.price);
  });

  console.log(`the total is ${sum}`);

  updateTotal(sum);

  const itemsSummary = items.map((item) => {
    return (
      <div className="row">
        <div className="col-9">{item.item}</div>
        <div className="col-3">{item.price}</div>
      </div>
    );
  });

  // To get list of payees from db

  return (
    <div className="row">
      <h1 className="my-2">Summary</h1>

      <h3 className="mt-2">Bill</h3>
      {itemsSummary}
      {sum > 0 && <hr className="my-2" />}
      <div className="row">
        <div className="col-9">
          <b>Total</b>
        </div>
        <div className="col-3">
          <b>{sum}</b>
        </div>
      </div>

      <h3 className="mt-4">Payees</h3>
      {itemsSummary}
      {sum > 0 && <hr className="my-2" />}
      <div className="row">
        <div className="col-9">
          <b>Total</b>
        </div>
        <div className="col-3">
          <b>{sum}</b>
        </div>
      </div>
    </div>
  );
}
