const {Router} = require("express")
const router = Router();

const Dato = require("../models/data")

router.get("/", async (req,res)=>{
    console.log("Printeando data...")
    try {
        arrayDatos = await Dato.find();
        console.log(arrayDatos);
        res.json(arrayDatos);
        // res.render("Home",{
        //     arrayDatos : arrayDatos
        // });
    } catch(e){
        console.log(e);
    } 
})

router.post("/", (req,res)=>{
    const {name,prize} = req.body; 
    if(name && prize) {
        res.send("recibido");// Envío mensaje a que hizo el request
        console.log("Formato Correcto");
        const newData = {...req.body}; // Creo un newObject con todas las propiedades del req
        Dato.insertMany(newData);//Inserto en la base de datos
    }
    else{
        res.status(500).json({error:"Ah ocurrido un error"});
    }
});

router.delete("/:name",(req,res)=>{
    const {name} = req.params.name;
    Dato.deleteMany({name:name})
})


module.exports = router;