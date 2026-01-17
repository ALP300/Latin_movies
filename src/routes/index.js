import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Tu sitio favorito de Películas Latinas" });
});
router.get("/cartelera", (req, res) => {
    res.render("cartelera", { title: "Cartelera" });
});
router.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
});
router.get("/register", (req, res) => {
    res.render("register", { title: "Register" });
});
router.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});
router.get("/promociones", (req, res) => {
    res.render("promociones", { title: "Promociones" });
});

export default router;
