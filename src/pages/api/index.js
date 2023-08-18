import { store } from "../placeholder.js";

export default async(req, res)=> {
  let { query:{page,limit},method } = req;

  switch (method) {
    case "GET":
      try {
        
        if(!page) page=1
        if(!limit) limit=10
        page=parseInt(page)
        limit=parseInt(limit)
        return res.json({
            data:store.slice((page-1)*limit, page * limit),
            total:store.length
        })
        
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
