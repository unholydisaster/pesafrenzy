import axios from 'axios';

export const registerCallbackURLs = async () => {
    const body = {
        "ShortCode":process.env.BUSINESS_SHORT_CODE,
        "ResponseType": "Completed",
        "ConfirmationURL": `${process.env.BASE_URL}/api/stkPushCallback`,
        "ValidationURL": `${process.env.BASE_URL}/api/validation`
      };
      
      const auth = 'Bearer M3F1uvHX4LOVAnMBVw8JQoEuGryk';
      
      try{
        const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl', body, {
            headers: {
                Authorization: auth,
                'Content-Type': 'application/json',
              },
        });
        console.log('Callback URLs registered successfully:', response.data);
    }catch(error){
        console.error('Failed to register callback URLs:', error.message);
    }
};


