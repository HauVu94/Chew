import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import req from "express/lib/request.js";
import res from "express/lib/response.js";
dotenv.config()
const app = express();
const db = require('./database')
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

const users = [{ username: "Haavar123", password: "123" }]



app.get("/api/users", (req, res, next) => {
  const sql = "select * from user"
  const params = []
  db.all(sql, params, (err, rows) => {
    if (err){
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message": "success",
      "data":rows
    })
  })
})


app.get("/api/login", (req, res) => {
  function respond(){
    if(req.user){
      const {username, password} = req.user;
      return res.json({username, password})
    }else{
      res.status(204)
    }
  }
});


app.post("/api/login", (req, res) => {
  const {username, password} = req.body;

  //find user
  const user = users.find(u => u.username === username && u.password === password); 

  //if found user
  if (user){
    res.cookie("username", user.username, {signed: true});
    res.sendStatus(200)
  }
  else{
    res.sendStatus(401)
  }
})




//Says where you find static files
app.use(express.static("../client/dist"))

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});





const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on http://localhost:${server.address().port}`);
});