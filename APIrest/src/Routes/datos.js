const {Router} = require("express")
const router = Router();

const data = require("../DB.json")

router.get("/",(req,res)=>{
    res.json(data);
    console.log(data);
})

module.exports = router;