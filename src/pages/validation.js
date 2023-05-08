import React, { useState } from 'react';
import base64 from 'base-64';
import fetch from 'isomorphic-unfetch';
import axios from "axios"

const Validation = () => {
  const [amount, setAmount] = useState('10');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  
  const simulateMpesaTransaction = async () => {
    try {
      const response = await axios.post('https://api.safaricom.co.ke/mpesa/c2b/v1/simulate', {
        "ShortCode":"174379",
        "CommandID":"CustomerPayBillOnline",
        "Amount":amount,
        "Msisdn":phoneNumber,
        "BillRefNumber":"test"
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      });
      alert('successfully requested');
      console.log(response.data)
    } catch (error) {
      alert('an error occurred');
      console.log(error);
    }
  };
  

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <label htmlFor="amount">Select Amount:</label>
      <div>
        <button onClick={() => setAmount('10')}>10 KES</button>
        <button onClick={() => setAmount('50')}>50 KES</button>
        <button onClick={() => setAmount('100')}>100 KES</button>
        <button onClick={() => setAmount('500')}>500 KES</button>
        <button onClick={() => setAmount('1000')}>1000 KES</button>
      </div>
      <input type="text" id="phone" name="phone" placeholder="Enter phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <button onClick={simulateMpesaTransaction}>Simulate Mpesa Transaction</button>
    </div>
  );
};

export default Validation;
