import express from "express";
import cors from "cors";
import challengeRoutes from "./routes/challengeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";


const app = express();
app.set('port', process.env.PORT || 5001)

//middleware
app.use(cors()) //middleware of cors, cors allows make petitions from a different server to the server of the backened
app.use(express.json()) //to recieve info in json format

//routes
app.use("/challenges", challengeRoutes);
app.use("/users", userRoutes);
app.use("/sessions", sessionRoutes);

export default app;  //can use in other files