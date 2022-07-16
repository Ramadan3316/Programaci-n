// Para copiar `` b n @
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan")

//Conexiones
const user ="Ramadan3316";
const password="2oKJh4L5ua4cwaR5";
const nameD = "TEST";
const url=`mongodb+srv://Ramadan3316:${password}@mongodata.vxtbq.mongodb.net/${nameD}?retryWrites=true&w=majority`;

mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true } //Para que no nos tiren errores en la consola
).then(()=> console.log("Mongo Conectado"))
    .catch((e)=> console.log("El eror es: ",e));

//Configuraciones
app.set("port",process.env.PORT || 3000); // Si el servidor me da un puerto uso ese si no el 3000
app.set("view engine","ejs");
app.set("views",__dirname+'/views');

//Middleware(Ejecuta antes del programa)
app.use(express.urlencoded({extended: false})) //Para recibir datos sencillos de formularios
app.use(express.json()); // Para poder soportar el formato JSON
app.use(morgan("dev"));
//Rutas
app.use(require("./Routes/index"));
app.use("/api/datos",require("./Routes/datos"));

//INICIO
app.listen(app.get("port"),()=>{
    console.log("Conected");
})