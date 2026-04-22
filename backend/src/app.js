import express from "express";
import cors from "cors";
import challengeRoutes from "./routes/challengeRoutes.js"

const app = express();
app.set('port', process.env.PORT || 5001)

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use("/api/challenge", challengeRoutes);

app.get("/", (req, res)=>{
    res.send("backend is working")
});

export default app;  //can use in other files