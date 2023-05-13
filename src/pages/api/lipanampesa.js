import { registerCallbackURLs } from "./register";
import { getTimestamp } from "./timestamp"
import axios from 'axios';

//import { getClientCredentialsToken } from "./getAccessToken";


export default async (req, res,next) => {
  try {
    const { amount, phone, Order_ID } = req.body; 

    const auth = 'Bearer M3F1uvHX4LOVAnMBVw8JQoEuGryk';
    registerCallbackURLs();
    next
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    // Get the access token using getClientCredentialsToken function
    // const access_token = await getClientCredentialsToken(process.env.MPESA_CONSUMER_KEY, process.env.MPESA_CONSUMER_SECRET);
    const timestamp = getTimestamp();

    // shortcode + passkey + timestamp
    const password = new Buffer.from(
      process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp
    ).toString('base64');
     console.log(Order_ID)

    const payload = {
      BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: `254${phone}`,
      PartyB: process.env.BUSINESS_SHORT_CODE,
      PhoneNumber: `254${phone}`,
      CallBackURL: `${process.env.BASE_URL}/api/stkPushCallback`,
      AccountReference: 'pesafrenzy limited',
      TransactionDesc: 'Paid online',
    };

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
      },
    });
   
    // Extract response parameters from the API response
    console.log(response.data)
    const { MerchantRequestID, ResponseCode, ResponseDescription } = response.data;
    res.status(200).json({ MerchantRequestID, ResponseCode, ResponseDescription });
   
  } catch (error) {
    console.error('Error while trying to create LipaNaMpesa details', error);
    res.status(503).send({
      message: 'Something went wrong while trying to create LipaNaMpesa details. Contact admin',
      error: error.message,
    });
  }
}
