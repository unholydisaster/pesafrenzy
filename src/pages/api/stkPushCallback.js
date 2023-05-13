
export default async (req, res) => {
    try{  
        console.log('Received callback request:', req.body);
        
        res.json(true)
  
    }catch (e) {
        console.error("Error while trying to update LipaNaMpesa details from the callback",e)
        res.status(503).send({
            message:"Something went wrong with the callback",
            error : e.message
        })
    }
  }
  