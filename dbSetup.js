const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);
  let db = new sqlite3.Database("miBaseDatos.db");

  db.run(
    "CREATE TABLE IF NOT EXISTS pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, gender TEXT, plan_salud TEXT, phone TEXT)",
    () => {
      jsonData.slice(0, jsonData.length / 2).forEach((paciente) => {
        db.run("INSERT INTO pacientes VALUES (?, ?, ?, ?, ?, ?, ?)", [
          paciente.id,
          paciente.first_name,
          paciente.last_name,
          paciente.email,
          paciente.gender,
          paciente["Plan de Salud"],
          paciente.phone,
        ]);
      });
    }
  );

  db.close();
});
