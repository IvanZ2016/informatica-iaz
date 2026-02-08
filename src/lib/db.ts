import mysql from "mysql2/promise";

// Configuration for future MySQL connection
// Install mysql2: npm install mysql2
const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "informatica_iaz_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

// Singleton pool instance
let pool: mysql.Pool | null = null;

export const getDb = async () => {
    if (!pool) {
        try {
            pool = mysql.createPool(dbConfig);
            // Construct a test query to verify connection (optional but good for debugging init)
            // const connection = await pool.getConnection();
            // connection.release();
            // console.log("Database connection established.");
        } catch (error) {
            console.error("Failed to initialize database connection:", error);
            throw error;
        }
    }
    return pool;
};

/*
USAGE EXAMPLE:

import { getDb } from "@/lib/db";

export async function GET() {
  const db = await getDb();
  const [rows] = await db.query("SELECT * FROM services");
  return NextResponse.json(rows);
}
*/
