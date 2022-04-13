const express = require("express");
const app = express();

app.get("/fruit/:someFruit", (req, res) => {
		res.send (`You are looking for ${req.params.someFruit}.`)
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000.")
});