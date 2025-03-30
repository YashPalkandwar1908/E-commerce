import mysql2 from "mysql2";


const pool = mysql2.createPool({
    host: process.env.HOST,
    port: Number(process.env.PORTDB),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
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

export { connectDB, promisepool };