import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let accessToken = null;
let refreshToken = null;
let expiresIn = null;

const generateToken = async () => {
  const { data } = await axios.get(`${process.env.MPESA_ENVIRONMENT}`, {
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
      const { phone, amount } = req.body;
  
      const data = {
        ShortCode:process.env.MPESA_SHORTCODE,
        CommandID:"CustomerPayBillOnline",
        Amount:amount,
        Msisdn:phone,
      };
  
      try {
        const response = await axios.post(
          `${process.env.MPESA_BASE_URL}/mpesa/c2b/v1/simulate`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
    } else {
      res.status(405).end();
    }
  };
