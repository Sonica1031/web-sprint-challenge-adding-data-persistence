const express = require("express");
const router = express.Router();
const db = require("../data/config")

router.get("/resource", async (req, res, next) =>{
    try{
       const result = await db("resource")
       res.json(result);
    }
    catch(err){
        next(err);
    }
})

router.post("/:id/resource", async (req, res, next) => {
    try{
        await db("resource").insert(req.body).where("id");
        const result = db("resource")
        res.json(result);

    }
    catch(err){
        next(err)
    }
})

module.exports = router;