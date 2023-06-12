import express, {json} from "express";
import cookieParser from "cookie-parser";
import sqlite3 from "sqlite3";

const app = express();
const db = new sqlite3.Database("chew.sqlite");
app.use(express.json());
app.use(cookieParser("your_cookie_secret"));

app.use((req, res, next) => {
  const { username } = req.signedCookies;

  if (username !== undefined) {
    const sql = `SELECT * FROM user WHERE username="${username}";`;

    db.all(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      if (rows.length === 0) {
        // User not found
        return res.sendStatus(404);
      }

      // User found, return the user data
      const userData = rows[0]; // Assuming there is only one user with the given username
      res.user = userData
    });
  }
  next();
});

app.get("/api/users", (req, res, next) => {
  console.log(req.signedCookies.username)
  if (req.signedCookies.username === undefined){
    console.log("hhhh")
    res.json()
    return;
  }
  const sql = `SELECT * FROM user WHERE username="${req.signedCookies.username}";`
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(rows)
    return res.json(rows);
  });
});


//ss


app.post("/api/users", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM user WHERE username="${username}" AND password="${password}";`;

  db.all(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(rows)

    if (rows.length === 0) {
      return res.sendStatus(401);
    } else {
      res.cookie("username", username.toString(), { signed: true }).send();
    }
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


