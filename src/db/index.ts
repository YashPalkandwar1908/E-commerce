import mysql2 from "mysql2";


const pool = mysql2.createPool({
    host: process.env.HOST||'localhost',
    port: Number(process.env.PORTDB)||3306,
    user: process.env.USER||'root',
    password: process.env.PASSWORD||'@Mysql1908',
    database: process.env.DATABASE||'ecommerce'
});


const promisepool = pool.promise();

const connectDB = async () =>{
    try {
        const connection = await promisepool.getConnection();
        console.log(`\nMySQL Connected...   DB Host:${process.env.PORTDB}`);
        connection.release();
    } catch (error) {
        console.error(`\nMySQL Connection Error: ${error}`);
    }
}

export { connectDB };