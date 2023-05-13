import axios from 'axios';
import { generateAccessToken } from "./getAccessToken";
import { getTimestamp } from "./timestamp";

export const confirmPayment = async(req, res) => {
  try {
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";
    const { access_token } = await generateAccessToken();
    const auth = `Bearer ${access_token}`;

    const timestamp = getTimestamp();
    //shortcode + passkey + timestamp
    const password = new Buffer.from(
      process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp
    ).toString('base64');

    const payload = {
      BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      CheckoutRequestID: req.params.CheckoutRequestID,
    };

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: auth,
      },
    });

    res.status(200).json(response.data);

  } catch (error) {
    console.error("Error while trying to create LipaNaMpesa details", error);
    res.status(503).send({
      message: "Something went wrong while trying to create LipaNaMpesa details. Contact admin",
      error: error,
    });
  }
}
