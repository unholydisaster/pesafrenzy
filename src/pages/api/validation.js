import axios from "axios";
import cors from "cors";

const corsMiddleware = cors({
  origin: "*", // Be sure to change this to your actual domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
});

const accessToken = {
  token: null,
  expiresIn: null,
};

const generateToken = async () => {
  try {
    const { data } = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        auth: {
          username: process.env.MPESA_CONSUMER_KEY,
          password: process.env.MPESA_CONSUMER_SECRET,
        },
      }
    );

    accessToken.token = data.access_token;
    accessToken.expiresIn = data.expires_in;

    // Set a timeout to refresh the access token a few minutes before it expires
    setTimeout(generateToken, (accessToken.expiresIn - 5 * 60) * 1000);

    return accessToken.token;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate token");
  }
};



export default async (req, res) => {
  try {
    await corsMiddleware(req, res); // Call the cors middleware

    if (req.method === "POST") {
      const { phone, amount } = req.body;

      const data = {
        ShortCode: process.env.MPESA_SHORTCODE,
        CommandID: "CustomerBuyGoodsOnline",
        Amount: amount,
        Msisdn: phone,
      };

      const response = await axios.post(
        `${process.env.MPESA_BASE_URL}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );

      res.status(200).json({ res: res.data, response: response.data });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// Call the `generateToken` function to get the initial access token
generateToken();
