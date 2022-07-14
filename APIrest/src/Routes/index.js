const {Router} = require("express"); // Uso un modulo de express para exportar rutas de otro
const router = Router();             //archivo

router.get("/",(req,res)=>{
    res.json({"Name":"Jorge"});
    console.log(res);
})

module.exports = router;