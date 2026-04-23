import express from "express";

const router = express.Router();

router.get("/session", (req, res)=>{
    res.status(200).send("Here is the session info")
});

router.post("/session", (req, res)=>{
    res.status(200).send("Session created")
});

export default router