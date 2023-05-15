/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MPESA_CONSUMER_KEY:"5sqwfPV8fCLw0aUYv1cP7h6q2KSYw8bx",
    MPESA_CONSUMER_SECRET: "IXwpsa7ddpbFYuhG",
    MPESA_ENVIRONMENT:"https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate",
    BUSINESS_SHORT_CODE:174379,
    BASE_URL:"https://pesafrenzy.vercel.app",
    PASS_KEY:"bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
    PORT:3000 
  }
}

module.exports = nextConfig
