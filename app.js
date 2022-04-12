const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("You are on the homepageURL.");
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000.")
})