const express = require("express");
const app = express();

//middleware
app.use(express.static("public"));
//藉此連結到/public/styles/style.css


app.get("/", (req, res) => {
	res.sendFile (__dirname+"/index.html")
});

//在formHandling頁面時送出 post request，並給出response
app.get("/formHandling", (req, res) => {
    //使用console.log(req.query); 可以在終端機中看到req.query的內容，也就是使用者輸入在表單上的資訊
    //因為 GET動作下訊息會被包成 query string，所以這邊會使用 req.query
    let {fullname, age} = req.query;
    res.send(`Thanks ${fullname}, who is ${age}, for sending data.`);  //發送response給網頁
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000.")
});