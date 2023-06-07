import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import * as path from "path";
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

const users = [{ username: "Haavar123", password: "123" }]



app.get("/api/login", (req, res) => {
  console.log("sss")
  return res.json({ username: "Johannes", fullName: "Johannes Brodwall" });
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