import React, { useState } from "react";
import axios from "axios";

export default function BillForm({ sendBillIndex }) {
  const [bill, setBill] = useState("");

  const handleBillChange = (event) => {
    const inputBill = event.target.value;
    setBill(inputBill);
  };

  const createBill = () => {
    axios
      .post("/bill", { bill })
      .then((result) => {
        sendBillIndex(result.data.id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="row">
      <h1 className="text-center my-4">Create Bill</h1>
      <div className="col-9">
        <input
          className="form-control"
          type="text"
          value={bill}
          onChange={handleBillChange}
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary" onClick={createBill}>
          Submit
        </button>
      </div>
    </div>
  );
}
