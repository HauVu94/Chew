import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import * as path from "path";
import dotenv from "dotenv";
import sqlite3  from "sqlite3";



dotenv.config()
const app = express();
const db = new sqlite3.Database("chew.sqlite");
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

console.log(db.run)


const users = [{ username: "Haavar123", password: "123" },
{ username: "Marcus", password: "321" }]

//adds cookie to session
app.use((req, res, next) => {
  const { username } = req.signedCookies;
  if (username) {
    req.user = users.find((u) => u.username === username);
  }
  next();
});


app.get("/api/login", (req, res) => {
    const{username, password} = req.user
    return res.json({username, password})
});

app.get("/api/users", (req, res, next) => {
  const sql = "SELECT * FROM user";
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(rows);
  });
});


//ss

app.post("/api/users", (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT * FROM user WHERE username=${username} AND password=${password}`;

  db.all(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(rows);
    res.status(200).cookie("username", username, { signed: true }).send();
  });
});



app.use(express.static("../client/dist"));

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


