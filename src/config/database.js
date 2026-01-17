import pg from "pg";

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});
export async function conectar() {
    try {
        const client = await pool.connect();
        console.log("Conectado a la base de datos");
        client.release();
    } catch (error) {
        console.log("Error al conectar a la base de datos", error)
    }
}

export default pool;