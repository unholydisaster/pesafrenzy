import { getTimestamp } from "./timestamp";
import axios from 'axios';

export default async (req, res, next) => {
  try {
    const { amount, phone, Order_ID } = req.body;
    
    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    const darajaEndpoint = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    var accessToken;
    try {
      const response = await axios.get(darajaEndpoint, {
        auth: {
          username: consumerKey,
          password: consumerSecret,
        },
      });
      accessToken = response.data.access_token;
  
    } catch (error) {
      console.error('Failed to obtain access token:', error);
      res.status(500).json({ error: 'Failed to obtain access token' });
    }
    
    const auth = `Bearer ${accessToken}`;
    console.log(accessToken);
    next
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    const timestamp = getTimestamp();

    const password = Buffer.from(
      process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp
    ).toString('base64');
    console.log(Order_ID);

    const payload = {
      BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: `254${phone}`,
      PartyB: process.env.BUSINESS_SHORT_CODE,
      PhoneNumber: `254${phone}`,
      CallBackURL: `${process.env.BASE_URL}/api/stkPushCallback/${Order_ID}`,
      AccountReference: 'pesafrenzy limited',
      TransactionDesc: 'Paid online',
    };

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
      },
    });

    const { CheckoutRequestID } = response.data;
    const CHECKOUTREQUESTID = CheckoutRequestID;
    next
    if(CHECKOUTREQUESTID!= null){
          const statusurl = "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";
          const statuspayload = {
            BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
            Password: password,
            Timestamp: timestamp,
            CheckoutRequestID: CHECKOUTREQUESTID,
          };
      
        const getStatus = await axios.post(statusurl, statuspayload, {
          headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
          },
        });
        
        {getStatus.data.ResultDesc == "The service request is processed successfully."?
          res.status(200).send(getStatus.data)
        : 
        console.log("payment not successfull")
        }
    
    } // Delay execution by 10 seconds (10000 milliseconds)

  } catch (error) {
    console.log('Error while trying to create LipaNaMpesa details', error);
    res.status(503).send({
      message: 'Something went wrong while trying to create LipaNaMpesa details. Contact admin',
      error: error.message,
    });
  }
};
