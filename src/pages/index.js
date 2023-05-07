import axios from 'axios';
import base64 from 'base-64';
import react,{ useState } from 'react';

const Mpesa = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [amount, setAmount] = useState('10');
  const [phoneNumber, setPhoneNumber] = useState('');

  const getAccessToken = async () => {
    const { MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET } = process.env
    const basicAuth = `Basic ${base64.encode(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`)}`;

    try {
      const response = await axios({
        url: 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
        method: 'post',
        headers: {
          'Authorization': basicAuth,
        },
      });
      const data = response.data;
      setAccessToken(data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const simulateMpesaTransaction = async () => {
    try {
      const response = await axios({
        url: 'https://api.safaricom.co.ke/mpesa/c2b/v1/simulate',
        method: 'post',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        
        data: {
          'ShortCode': '174379',
          'CommandID': 'CustomerBuyGoodsOnline',
          'Amount': amount,
          'Msisdn': phoneNumber,
        },
      });
      alert("successfully requested")
    } catch (error) {
      alert("an error occured")
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

export default Mpesa;
