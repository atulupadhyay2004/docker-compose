const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Database Connected: ${result.rows[0].now}`);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});