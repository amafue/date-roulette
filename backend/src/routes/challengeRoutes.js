import express from "express";
import { getChallenges, createChallenge, deleteChallenge, updateChallenge, getRandomChallenge } from "../controller/challengeController.js"

const router = express.Router();

router.get("/", getChallenges)
router.post("/create", createChallenge)
router.put("/:id", updateChallenge)
router.delete("/:id", deleteChallenge)
router.get("/random", getRandomChallenge)

export default router