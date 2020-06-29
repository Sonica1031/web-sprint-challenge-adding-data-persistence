const express = require("express");
const router = express.Router();
const db = require("../data/config")

router.get("/", async (req, res, next) => {
    try{
        const result = await db("task").where("id", req.params.id)
        res.json(result);

    }
    catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        await db("task").insert(req.body).where("id", req.params.id)
        const result = db("task").where("project_id", req.params.id);
        res.json(result);
    }
    catch(err){
        next(err);
    }
})

module.exports = router;