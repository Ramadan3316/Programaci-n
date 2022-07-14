import {Router} from "express" // importo solo una parte de express
const router = Router();

router.get("/",(req,res) => res.render("index"));
router.get("/about",(req,res) => res.render("about"));
router.get("/contact",(req,res) => res.render("contact"));
export default router;