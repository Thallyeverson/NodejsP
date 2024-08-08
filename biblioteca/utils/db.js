const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'dbbiblioteca',
    multipleStatements: true
})

db.connect((erro) => {
    if (erro){
        throw erro
    }
    console.log('conectado ao DB...');
});

global.db = db;
module.exports = db;