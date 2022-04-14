const express = require("express");
const app = express();
const bodyParser = require("body-parser");
/* body-parser 可以解析json、row、文本、URL-encoded格式的表單資料
如果method是POST時，代表資料會是urlencoded type，因此必須加上 body-parser 
來 parse 資料 */

//middleware，將bodyParser套用到應用程式中
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//在express中增加靜態檔案，準備將html與style.css樣式表作連接

//若get req url = "/"，則給出response回傳index.html內容之網頁
app.get("/", (req, res) => {
	res.sendFile (__dirname+"/index.html")
});

//若post req url = "/forHandling"，則給出response回傳指定字串
app.post("/formHandling", (req, res) => {
		//使用console.log(req.body); 可以在終端機中看到req.body的內容，也就是使用者輸入在表單上的資訊
		//因為 POST 的資料會被包在 message-body 裡，因此要使用 req.body
		let {fullname, age} = req.body;
    res.send(`Thanks for posting. Your name is ${fullname}, and your age is ${age}. `);  //發送response給網頁
});

app.get("/NotHere", (req, res) => {
    res.status(302).sendFile(__dirname + "/moved.html");
});

//用*來表示除了指定網頁外其他的網址，如"/i6ase9"，並讓伺服器將這些req回應以error.html
app.get("*", (req, res) => {
    res.status(404);
		//這邊的狀態碼是要讓網頁開發者可以在主控台及網路中看到404(沒有這行看不出來是正常還是不正常)
    //console.log(res.statusCode);  這樣寫可以在終端機中看到http狀態碼(404等等)
    res.sendFile(__dirname + "/error.html");
		//網頁錯誤後將瀏覽器(使用者)導到/error.html
		/* res.status(404).sendFile(__dirname + "/error.html");
			上方是更加簡潔的寫法*/
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000.")
});