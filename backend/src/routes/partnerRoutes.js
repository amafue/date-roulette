import express from "express";
import { getPartner, createPartner } from '../controller/partnerController.js'

const router = express.Router();

router.get("/:id", getPartner)
router.post("/", createPartner)


export default router