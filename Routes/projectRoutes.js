const express = require("express");
const router = express.Router();
const db = require("../data/config")

router.get("/", async (req, res, next) => {
   try{ 
    const result = await db("project");
    res.json(result);
   }
   catch(err){
       next(err);
   }
})

router.post("/", async (req, res, next) => {
    try{
        await db("project").insert(req.body);
        result = db("project");
        res.json(result);
    }
    catch(err){
        next(err)
    }
})


module.exports = router;