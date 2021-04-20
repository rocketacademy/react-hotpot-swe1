import React, { useState } from "react";

import BillForm from "./components/BillForm.jsx";

export default function App() {
  const [billIndex, setBillIndex] = useState("");

  const setTopBill = (inputIndex) => {
    setBillIndex(inputIndex);
  };

  return (
    <div className="container mt-4">
      <BillForm setBillName={setTopBill} />
    </div>
  );
}
