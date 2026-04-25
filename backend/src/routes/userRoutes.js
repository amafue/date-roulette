import express from "express";
import { getUser, createUser } from "../controller/userCrontroller.js";

const router = express.Router();

router.get("/:id", getUser)
router.post("/", createUser)


export default router