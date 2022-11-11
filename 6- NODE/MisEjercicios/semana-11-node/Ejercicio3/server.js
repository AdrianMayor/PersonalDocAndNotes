/* # Ejercicio node 3
Programa un servidor web usando express que contenga:
- Una ruta que devuelva la hora actual.
- Una ruta que devuelva el directorio del archivo dónde se haya el código del servidor.
- Un middleware que imprima por consola información de cada request.
- Un middleware de error y otro que se ocupe de los errores 404.
 */

const express = require("express");
const path = require("path");
const morgan = require("morgan");

// Creamos un servidor con express
const app = express();

// Middleware que hace uso del logger "morgan"
app.use(morgan("./server.js"));

// Endpoints
app.get("/time", getHour);

app.get("/location", getLocation);

// Funciones controladoras
function getHour(req, res, next) {
  try {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    res.send({
      status: "ok",
      data: `${hours}:${minutes}`,
    });
  } catch (err) {
    next(err);
  }
}

function getLocation(req, res, next) {
  try {
    const data = path.join(__dirname, __filename);
    console.log(data);
    res.send({
      status: "ok",
      data,
    });
  } catch (err) {
    next(err);
  }
}

// Middleware de error
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
});

// Middleware not found
app.use((req, res) => {
  res.status(404).send({
    status: "ok",
    message: "Not found!",
  });
});

app.listen(4001, () => {
  console.log("Server listening at http://localhost:4001");
});
