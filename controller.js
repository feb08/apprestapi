'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

// GET-> Menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// GET-> Menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// POST-> Menambahkan data mahasiswa berdasarkan id
exports.tambahmahasiswa = function(req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) value(?,?,?)', [nim, nama, jurusan], function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok("berhasil menambahkan data mhs", res)
        }
    });
};

// PUT-> Mengubah data mahasiswa berdasarkan id
exports.ubahmahasiswa = function(req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id], function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok('berhasil mengubah data mhs', res)
        }
    });
};

// DELETE-> Menghapus data mahasiswa berdasarkan id
exports.hapusmahasiswa = function(req, res) {
    var id = req.body.id_mahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id], function(error, rows, field){
        if(error){
            console.log(error)
        } else {
            response.ok('berhasil menghapus data mhs', res)
        }
    });
};