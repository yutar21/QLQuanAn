import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'quanlynhanvien',

})

export default pool;