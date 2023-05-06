/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MPESA_CONSUMER_KEY:"NWeOtxlhIhLGT1UUmcfTTTFIj5fNGXIO",
    MPESA_CONSUMER_SECRET: "veBhIB6k5k2B8g0h",
    MPESA_ENVIRONMENT:"https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate",
    MPESA_SHORTCODE:"174379",
    BASE_URL:"https://pesafrenzy.vercel.app",
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
