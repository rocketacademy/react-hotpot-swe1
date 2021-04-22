import React, { useState } from 'react';
import axios from 'axios';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

export default function PersonList({ people }) {
  axios.get(`/amountOwed/${id}`).then((response) => {
    console.log(response.data);
  });
  return <div />;
}
