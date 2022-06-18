const mysql = require('mysql');

let db_host = 'localhost';; 
let db_user_name = 'root';
let db_password = 'root';

const db = mysql.createConnection({
    host: db_host,
    user: db_user_name,
    password: db_password,
    database: 'quizz',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'   
})

db.connect((err) => {
    if (err) {
        throw(err);
    }
    console.log('connected to database');
})

