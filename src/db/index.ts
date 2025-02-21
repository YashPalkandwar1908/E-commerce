import mysql2 from "mysql2";

const pool = mysql2.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@Mysql1908',
    database: 'ecommerce'
});


const promisepool = pool.promise();

const connectDB = async () =>{
    try {
        const connection = await promisepool.getConnection();
        console.log(`\nMySQL Connected... DB Host:`);
        connection.release();
    } catch (error) {
        console.error(`\nMySQL Connection Error: ${error}`);
    }
}

export { connectDB };