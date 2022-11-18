import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const [nim, setNim] = useState(0);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  const tambahData = () => {
    Axios.post("http://localhost:3001/tambah", {
      nim: nim,
      nama: nama,
      email: email,
      alamat: alamat
    });
  };

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
      </div>
    </div>
  );
}

export default App;
