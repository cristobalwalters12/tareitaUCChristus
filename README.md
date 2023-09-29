# tareaUCChristusJS
### Prerrequisitos

- tener [Node.js](https://nodejs.org/) instalado.

### Instrucciones de Instalación

1. **Clonar el Repositorio:**
   ```sh
   git clone https://github.com/cristobalwalters12/tareitaUCChristus.git
   
   cd tareitaUCChristus
   
   code .
   ```
2. **Instalar desde la consola las dependecias  del servidor express:**

 ```sh
  npm install
```
3. **Si se quiere crear la base de datos en la consola poner:**
```sh
  node dbSetup.js
```
Se creara la base de datos con nombre de miBaseDatos.db(considerar que la base de datos ya viene creada, si se vuelve a crear saldra error ya que el ID lo tengo puesto como PRIMARY KEY)

4. **inyectar datos a la base de datos:** se debe ejecutar desde la consola
   
```sh
   node injectToDb.js
```
los datos que se agregaran a la db seran 
   ```json
[
  {
    "email": "john.doe@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "phone": "1234567890",
    "plan_salud": "Plan1",
    "gender": "Male"
  }
]
```
   
6. **Iniciar servidor:**
```sh
  node index.js
```
6. **Abrir el Archivo index.html con Live Server:**
    tener instalado [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en Visual Studio Code, y luego abrir index.html con Live Server para visualizar la aplicación.
