import express from "express";
import mysql from "mysql";
import cors from "cors";
import auth from "./.pwd.json" assert { type: "json" };

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: auth.usr,
  password: auth.pass,
  database: "ecdm_db",
});

app.get("/", (req, res) => {
  res.json("ECDM Backend Online...");
  // const q = "SELECT * FROM usertb";
  // db.query(q, (err, data) => {
  //   if (err) return res.json(err);
  //   return res.json(data);
  // });
});

app.get("/usrslgninfo", (req, res) => {
  const q = "SELECT * FROM usertb";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/usrslgninfo", (req, res) => {
  const q = "INSERT INTO usertb(`name`, `email`, `password`) VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get("/usrslgninfo/:name", (req, res) => {
  const nme = req.params.name;
  const q = "SELECT * FROM usertb  WHERE name=?";
  db.query(q, [nme], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to the Backend Server!");
});
