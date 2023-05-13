import { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [orderId, setOrderId] = useState(Math.floor(Math.random() * 100000));

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      amount: amount,
      phone: phone,
      Order_ID: orderId
    };

    axios.post('/api/lipanampesa', requestData)
      .then(response => {
        console.log(response.data);
        // handle successful response here
      })
      .catch(error => {
        console.error(error);
        // handle error response here
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone number:
        <input placeholder='phone number' type="text" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input placeholder='amount' type="text" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <br />
      <button type="submit">Initiate STK Push</button>
    </form>
  );
};

export default MyForm;

