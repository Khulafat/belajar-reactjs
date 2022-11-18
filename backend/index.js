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

app.listen(3001, () => {
    console.log("koneksi sukses");
});