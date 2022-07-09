import {Router} from "express" // importo solo una parte de express
const router = Router();

router.get("/",(req,res) => res.render("index"));
router.get("/about",(req,res) => res.render("about"));
router.get("/main.js",(req,res) => res.render("./partials/main.js"));
export default router;