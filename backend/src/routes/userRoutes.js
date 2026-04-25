import express from "express";
import { getUser, createUser } from "../controller/userCrontroller.js";

const router = express.Router();

router.get("/:id", getUser)
router.post("/", createUser)

// router.get("/user", (req, res)=>{
//     res.status(200).send("Here is the user info")
// });

// router.post("/user", (req, res)=>{
//     res.status(200).send("User created")
// });

export default router