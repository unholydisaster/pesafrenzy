
export default async (req, res) => {
    try{  
        
        res.json(req.body)
  
    }catch (e) {
        console.error("Error while trying to update LipaNaMpesa details from the callback",e)
        res.status(503).send({
            message:"Something went wrong with the callback",
            error : e.message
        })
    }
  }
  