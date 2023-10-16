//importa dados
import mysql from 'mysql2/promise';
//importa dados
import dotenv from 'dotenv';


//configura dotenv para receber os parametros de outro arquivo
//importante fazer isso para segurança dos seus dados
dotenv.config();


//conexão com o DB
export const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});