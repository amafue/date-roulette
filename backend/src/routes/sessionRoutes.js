import express from "express";
import { getAllSessions, getSession, createSession, updateSession } from "../controller/sessionController.js";

const router = express.Router();

router.get("/",getAllSessions);
router.get("/:id",getSession);
router.post("/",createSession);
router.put("/:id",updateSession);

export default router