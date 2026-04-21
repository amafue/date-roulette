const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("API is running")
});

const PORT = 5001;
app.listen(PORT, ()=>{
    console.log("server is running at " + PORT);
});
