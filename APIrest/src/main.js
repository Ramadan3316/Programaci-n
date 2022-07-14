// Para copiar `` b n @
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

//Conexiones
const user ="Ramadan3316";
const password="2oKJh4L5ua4cwaR5";
const nameD = "TEST";
const url=`mongodb+srv://${user}:${password}@mongodata.vxtbq.mongodb.net/${nameD}?retryWrites=true&w=majority`;
mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true } //Para que no nos tiren errores en la consola
).then(()=> console.log("Mongo Conectado"))
    .catch((e)=> console.log("El eror es: ",e));

//Configuraciones
app.set("port", process.env.PORT || 3000); // Si el servidor me da un puerto uso ese si no el 300

//Middleware(Ejecuta antes del programa)
// app.use(morgan("dev")); // Para ver las peticiones en consola
// app.use(express.urlencoded({extended: false})) // Para recibir datos sencillos de formularios
app.use(express.json()); // Para poder soportar el formato JSON

//Rutas
app.use(require("./Routes/index"));
app.use("/api/datos",require("./Routes/datos"));

//Starting server
app.listen(app.get("port"),()=>{
    console.log("Conected");
})