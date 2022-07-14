const {Router} = require("express")
const router = Router();

const Dato = require("../models/data")

router.get("/", async (req,res)=>{
    console.log("Printeando data...")
    try {
        const arrayDatos = await Dato.find();
        console.log(arrayDatos);
    } catch(e){
        console.log(e);
    }
    // console.log("La res es: ",res);
})

module.exports = router;