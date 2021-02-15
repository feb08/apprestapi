var mysql = require('mysql');

//Buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'dbrestapi',
    port: '3306'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('berhasil terkoneksi');
});

module.exports = conn;