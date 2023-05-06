import axios from "axios";
import cors from "cors"

cors()

let accessToken = null;
let refreshToken = null;
let expiresIn = null;

const generateToken = async () => {
 
  const { data } = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
    auth: {
      username: process.env.MPESA_CONSUMER_KEY,
      password: process.env.MPESA_CONSUMER_SECRET,
    },
  });

  accessToken = data.access_token;
  refreshToken = data.refresh_token;
  expiresIn = data.expires_in;

  // Set a timeout to refresh the access token a few minutes before it expires
  setTimeout(generateToken, (expiresIn - 5 * 60) * 1000);

  return accessToken;
};

// Call the `generateToken` function to get the initial access token
generateToken();

export default async (req, res) => {


    if (req.method === "POST") {
      
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      };

      const { phone, amount } = req.body;
  
      const data = {
        "ShortCode":process.env.MPESA_SHORTCODE,
        "CommandID":"CustomerBuyGoodsOnline",
        "Amount":amount,
        "Msisdn":phone,
      };
  
      try {
        const res = await axios.post("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl", {
          "ShortCode":174379,
          "ResponseType": "Completed",
          "ConfirmationURL": `${process.env.BASE_URL}/confirmation`,
          "ValidationURL": `${process.env.BASE_URL}/validation`,
        }, { headers });

        const response = await axios.post(
          `${process.env.MPESA_BASE_URL}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        res.status(200).json({ res: res.data, response: response.data });
      } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
    } else {
      res.status(405).end();
    }
  };
