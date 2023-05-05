export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default async (req, res) => {
    if (req.method === "POST") {
      console.log(req.body);
      res.status(200).send("Callback received");
    } else {
      res.status(405).end();
    }
  };
  