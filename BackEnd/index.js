import express, { json } from "express";
import mysql, { format } from "mysql";
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

app.post("/data", (req, res) => {
  const q =
    "INSERT INTO datatb(`name`, `phno`, `email`, `product`, `city`, `country`, `remarks`, `expiry`, `user`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.phno,
    req.body.email,
    req.body.product,
    req.body.city,
    req.body.country,
    req.body.remarks,
    req.body.expiry,
    req.body.user,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get("/data", (req, res) => {
  const q =
    "SELECT id, name, phno, email, product, city, country, remarks, DATE_FORMAT(expiry,'%d/%c/%Y') as expiry, user FROM datatb";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/data/:whrcond", (req, res) => {
  const cond = req.params.whrcond;
  const q =
    "SELECT id, name, phno, email, product, city, country, remarks, DATE_FORMAT(expiry,'%d/%c/%Y') as expiry FROM datatb WHERE " +
    cond;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/data/:whrcond", (req, res) => {
  const cond = req.params.whrcond;
  console.log(cond);
  const qs = "SELECT id FROM datatb WHERE " + cond;
  var dataId = "";
  db.query(qs, (err, data) => {
    // if (err) console.log(err);
    dataId = data[0].id.toString();
    console.log("this is data: ", dataId);
    // new addition
    qu = qu.substring(0, qu.length - 1);
    console.log("DataId in query: ", dataId);
    qu += " WHERE id = " + dataId + " AND user = ? ";
    values = values.concat(val.user);
    console.log(format(qu, values));

    db.query(qu, [...values], (err, data) => {
      if (err) return res.send(err);
      console.log("Update func reached");
      return res.json(data);
    });
  });
  // db.query(qu, [...values], (err, data) => {
  //   if (err) return res.send(err);
  //   console.log("Update func reached");
  //   return res.json(data);
  // });
  // var qu =
  //   "UPDATE books SET name=?, phno=?, `email`=?, `product`=?, `city`=?, `country`=?, `remarks`=?, `expiry`=?, WHERE id = ? AND `user` = ? ";
  var qu = "UPDATE datatb SET ";

  var values = [];
  const val = req.body;
  if (!Object.keys(val).every((key) => val[key] == "")) {
    for (var i in val) {
      if (val[i] != "") {
        qu += i.toString() + "=?,";
        values = values.concat(val[i].toString());
      }
    }
  }
  // qu = qu.substring(0, qu.length - 1);
  // console.log("DataId in query: ", dataId);
  // qu += " WHERE id = " + dataId + " AND user = ? ";
  // values = values.concat(val.user);
  // console.log(format(qu, values));

  // db.query(qu, [...values], (err, data) => {
  //   if (err) return res.send(err);
  //   console.log("Update func reached");
  //   return res.json(data);
  // });
});

app.listen(8800, () => {
  console.log("Connected to the Backend Server!");
});
