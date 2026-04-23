import express from "express";

const router = express.Router();

router.get("/user", (req, res)=>{
    res.status(200).send("Here is the user info")
});

router.post("/user", (req, res)=>{
    res.status(200).send("User created")
});

export default router