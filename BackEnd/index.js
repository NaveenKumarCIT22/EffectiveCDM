import express from "express";
import mysql from "mysql";
import auth from "./pwd.json" assert { type: "json" };

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: auth.usr,
  password: auth.pass,
  database: "ecdm_db",
});

app.get("/", (req, res) => {
  res.json("ECDM Backend Online...");
});

app.get("/usrs", (req, res) => {
  const q = "SELECT * FROM usertb";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to the Backend Server!");
});
