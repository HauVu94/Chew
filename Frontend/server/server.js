import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import * as path from "path";
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

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

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.sendStatus(401);
  }
  res.cookie("username", username, { signed: true });
  res.sendStatus(200);
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