const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const cors = require("cors");
const db = new sqlite3.Database("./miBaseDatos.db");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/pacientes", (req, res) => {
  const { email } = req.query;
  if (email) {
    db.all("SELECT * FROM pacientes WHERE email = ?", [email], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  } else {
    db.all("SELECT * FROM pacientes", [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  }
});
app.post("/pacientes", (req, res) => {
  const newPatient = req.body;
  db.run(
    "INSERT INTO pacientes (email, first_name, last_name, phone, plan_salud, gender) VALUES (?, ?, ?, ?, ?, ?)",
    [
      newPatient.email,
      newPatient.first_name,
      newPatient.last_name,
      newPatient.phone,
      newPatient.plan_salud,
      newPatient.gender,
    ],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
