//Importaciones
import express from "express" // frameWork
import {dirname,join} from "path" // Sirve para crear los path dinamicos
import { fileURLToPath } from "url";
//import ejs from "ejs" Por defecto express trabaja con ejs asi que no hace falta importanlo
import indexRoutes from "./routes/index.js";

//Constantes
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)) // seteo el path de la carpeta src

app.set("view engine","ejs"); //Declaro que ejs va a ser el que va a ejecutar las views
app.set("views",join(__dirname,"views")); //Seteo la carpeta views y su path
app.use(indexRoutes); // Carpeta donde estan las rutas de todos los archivos ejs
app.use(express.static(join(__dirname,"public"))); // Le doy la ruta de public a express app

app.listen(3000);
console.log("El server se inció en el port",3000);
