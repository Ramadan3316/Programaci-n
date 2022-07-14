const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuraciones
app.set("port", process.env.PORT || 3000); // Si el servidor me da un puerto uso ese si no el 300
app.set("json spaces",2);

//Middleware(Ejecuta antes del programa)
app.use(morgan("dev")); // Para ver las peticiones en consola
app.use(express.urlencoded({extended: false})) // Para recibir datos sencillos de formularios
app.use(express.json()); // Para poder soprtar el formato JSON

//Rutas
app.use(require("./Routes/index"));
app.use("/api/datos",require("./Routes/datos"));

//Starting server
app.listen(app.get("port"),()=>{
    console.log("Conected");
})