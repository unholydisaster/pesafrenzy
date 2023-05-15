import axios from 'axios';

export default async(req,res) => {
  const consumerKey =process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  console.log(auth)
  
  const headers = {
    'Authorization': `Basic ${auth}`,
  };
  

  try {
    const response = await axios.get('https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', { headers });

    console.log('Access token generated successfully:', response.data);
    
  } catch (error) {
    console.error('Failed to generate access token:', error.message);
  }
};

