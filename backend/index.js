const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "belajarreactjs"
});

app.post("/tambah", (req, res) => {
    const nim = req.body.nim;
    const nama = req.body.nama;
    const email = req.body.email;
    const alamat = req.body.alamat;

    db.query(
        "Insert INTO mahasiswa (nim, nama, email, alamat) VALUES (?,?,?,?)",
        [nim, nama, email, alamat],
        (err, result) => {
            if(err) {
                console.log(err);
            }else{
                res.send("Sukses");
            }
        }
    )
});

app.get("/tampil", (req, res) => {
    db.query("SELECT * FROM mahasiswa", (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
   const nim = req.body.nim;
   const nama = req.body.nama;
   db.query("UPDATE mahasiswa SET nama = ? Where nim =?",
    [nama, nim], (err, result) =>{
        if(err){
            console.log(err)
        } else {
            res.send(result);
        }
    });
})

app.delete("/delete/(:nim)", (req, res) => {
    const nim = req.params.nim;
    db.query("DELETE FROM mahasiswa WHERE nim = ?", nim, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("koneksi sukses");
});