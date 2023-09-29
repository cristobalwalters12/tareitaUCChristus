const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("miBaseDatos.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});

const data = [
  {
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    phone: "1234567890",
    plan_salud: "Plan1",
    gender: "Male",
  },
];

data.forEach((patient) => {
  db.run(
    `INSERT INTO pacientes (email, first_name, last_name, phone, plan_salud, gender) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      patient.email,
      patient.first_name,
      patient.last_name,
      patient.phone,
      patient.plan_salud,
      patient.gender,
    ],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Rows inserted ${this.changes}`);
    }
  );
});

db.close();
