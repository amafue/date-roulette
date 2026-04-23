import express from "express";

const router = express.Router();

router.get("/challenge", (req, res)=>{
    res.status(200).send("here is the challenge")
});

router.post("/challenge", (req, res)=>{
    res.status(200).send("challenge created")
});

router.put("/challenge/:id", (req, res)=>{
    res.status(200).send("challenge updated")
});

router.delete("/challenge/:id", (req, res)=>{
    res.status(200).send("challenge deleted")
});

router.get("/challenge/random", (req, res)=>{
    res.status(200).send("here is the random challenge")
});

export default router