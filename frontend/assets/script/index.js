const api = "http://localhost:3000/pacientes";
async function getData() {
  try {
    const res = await fetch(api);
    const data = await res.json();

    let tableData = "";
    data.forEach((values) => {
      tableData += `<tr>
                      <td>${values.id}</td>
                      <td>${values.email}</td>
                      <td>${values.first_name}</td>
                      <td>${values.last_name}</td>
                      <td>${values.phone}</td>
                      <td>${values.plan_salud}</td>
                      <td>${values.gender}</td>
                    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  } catch (error) {
    console.error("Hubo un error", error);
  }
}

async function searchByEmail() {
  const emailInput = document.getElementById("search_email");
  const email = emailInput.value;

  try {
    const res = await fetch(`${api}?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    let tableData = "";
    data.forEach((values) => {
      tableData += `<tr>
                        <td>${values.id}</td>
                        <td>${values.email}</td>
                        <td>${values.first_name}</td>
                        <td>${values.last_name}</td>
                        <td>${values.phone}</td>
                        <td>${values.plan_salud}</td>
                        <td>${values.gender}</td>
                      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  } catch (error) {
    console.error("Hubo un error", error);
  }
}
getData();

async function submitForm() {
  const emailInput = document.getElementById("add_email");
  const firstNameInput = document.getElementById("first_name");
  const lastNameInput = document.getElementById("last_name");
  const phoneInput = document.getElementById("phone");
  const planSaludInput = document.getElementById("plan_salud");
  const genderInput = document.getElementById("gender");

  const newPatient = {
    email: emailInput.value,
    first_name: firstNameInput.value,
    last_name: lastNameInput.value,
    phone: phoneInput.value,
    plan_salud: planSaludInput.value,
    gender: genderInput.value,
  };

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatient),
    });
    if (response.ok) {
      console.log("Paciente agregado exitosamente");
      getData();
    } else {
      console.error("Error al agregar el paciente:", response.statusText);
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
  }
}
