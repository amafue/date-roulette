const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Data base connected"))
    .catch((err) => console.log("Data base error:", err))


app.get("/", (req, res)=>{
    res.send("backend is working")
});

const PORT = 5001;
app.listen(PORT, ()=>{
    console.log("server is running at " + PORT);
});

