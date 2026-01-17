import "dotenv/config";
import express from "express";
import { conectar } from "./config/database.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

app.get("/hola", (req, res) => {
    res.send("Hola mundo");
});
conectar();