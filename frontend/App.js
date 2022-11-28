import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const [nim, setNim] = useState(0);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [biomhs, setBiomhs] = useState([]);
  const [updNama, setUpdNama] = useState("");

  const tambahData = () => {
    Axios.post("http://localhost:3001/tambah", {
      nim: nim,
      nama: nama,
      email: email,
      alamat: alamat
    });
  };

  const tampilData = () => {
    Axios.get("http://localhost:3001/tampil").then((response) => {
      setBiomhs(response.data);
    });
  };

  const updateData = (nim) => {
    Axios.put("http://localhost:3001/update",
    {nama: updNama, nim: nim}).then((response) => {
      alert("update");
    })
  }

  const hapusData = (nim) => {
    Axios.delete(`http://localhost:3001/delete/${nim}`).then((response) => {
      alert("data dihapus");
    })
  }

  tampilData();

  return (
    <div className="App">
      Belajar ReactJs
      <br/>
      <div className='datamhs'>
        <br/>
        <br/>
        <label>Nim:</label>
        <input type= "number" onChange={
          (event) => {
            setNim(event.target.value)
          }
        }/>
        <label>Nama:</label>
        <input type= "text" onChange={
          (event) => {
            setNama(event.target.value)
          }
        }/>
        <label>email:</label>
        <input type= "text" onChange={
          (event) => {
            setEmail(event.target.value)
          }
        }/>
        <label>Alamat:</label>
        <input type= "text" onChange={
          (event) => {
            setAlamat(event.target.value)
          }
        }/>
        <button onClick={tambahData}>Simpan</button>
          {biomhs.map((val, key) => {
            return(
              <div className='tampilmhs'>
                <h3>Nim: {val.nim}</h3>
                <h3>Nama: {val.nama}</h3>
                <h3>email: {val.email}</h3>
                <h3>Alamat: {val.alamat}</h3>
                <div>
                  {""}
                  <input type="text" onChange={
                    (event) => {
                      setUpdNama(event.target.value)
                    }}/>
                    <button onClick={() => {
                      updateData(val.nim);
                    }}>{""} Update</button>
                    <button onClick={() => {
                      hapusData(val.nim);
                    }}>{""} Delete</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
