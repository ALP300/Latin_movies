import pool from "../config/database.js";

/*select * from movies*/
export const getAllMovies = async (req, res) => {
    try {
        const movies = await pool.query("SELECT * FROM movies");
        res.json(movies.rows);
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        res.status(500).json({ error: "Error al obtener las películas" });
    }
};

export const getMovieById = async (req, res) => {
    try {
        const movie = await pool.query("SELECT * FROM movies WHERE id = $1", [req.params.id]);
        res.json(movie.rows[0]);
    } catch (error) {
        console.error("Error al obtener la película:", error);
        res.status(500).json({ error: "Error al obtener la película" });
    }
};

export const createMovie = async (req, res) => {
    try {
        const movie = await pool.query("INSERT INTO movies (title, description, director, genre, image_url, release_date) VALUES ($1, $2, $3, $4, $5, $6)", [req.body.title, req.body.description, req.body.director, req.body.genre, req.body.image_url, req.body.release_date]);
        res.json(movie.rows[0]);
    } catch (error) {
        console.error("Error al crear la película:", error);
        res.status(500).json({ error: "Error al crear la película" });
    }
};

export const updateMovie = async (req, res) => {
    try {
        const movie = await pool.query("UPDATE movies SET title = $1, description = $2, director = $3, genre = $4, image_url = $5, release_date = $6 WHERE id = $7", [req.body.title, req.body.description, req.body.director, req.body.genre, req.body.image_url, req.body.release_date, req.params.id]);
        res.json(movie.rows[0]);
    } catch (error) {
        console.error("Error al actualizar la película:", error);
        res.status(500).json({ error: "Error al actualizar la película" });
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const movie = await pool.query("DELETE FROM movies WHERE id = $1", [req.params.id]);
        res.json(movie.rows[0]);
    } catch (error) {
        console.error("Error al eliminar la película:", error);
        res.status(500).json({ error: "Error al eliminar la película" });
    }
};
