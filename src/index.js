import "dotenv/config";
import express from "express";
import { conectar } from "./config/database.js";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Usar las rutas
app.use("/", router);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

conectar();