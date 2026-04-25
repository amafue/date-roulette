import express from "express";
import { getChallenges, createChallenge, deleteChallenge, updateChallenge, getRandomChallenge } from "../controller/challengeController.js"

const router = express.Router();

router.get("/", getChallenges)
router.post("/", createChallenge)
router.put("/:id", updateChallenge)
router.delete("/:id", deleteChallenge)
router.get("/random", getRandomChallenge)

// router.post("/", (req, res)=>{
//     res.status(200).send("challenge created")
// });

// router.put("/:id", (req, res)=>{
//     res.status(200).send("challenge updated")
// });

// router.delete("/:id", (req, res)=>{
//     res.status(200).send("challenge deleted")
// });

// router.get("/random", (req, res)=>{
//     res.status(200).send("here is the random challenge")
// });

export default router