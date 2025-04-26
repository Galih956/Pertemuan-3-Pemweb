// import libraries;
import React, {useState} from "react";
import Header from "./header";
import "./App.css";
import Footer from "./footer.jsx";
import List from "./list.jsx";
import Top from "./top.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// membuat komponen dengan class


//create component
const App = () => {
  const [state, setState] = useState(1);  
  const increase = () =>
    setState(count => count + 1)
  const decrease = () =>
      setState(count => count -1)
   return (
    <div className="app">
      <center>
      <Button variant="primary" onClick={increase}>tambah</Button>
      <br/>
      <span>{state}</span>
      <br/>
      <Button variant="secondary" onClick={decrease}>kurang</Button>  
      <Header list="10 daftar makanan"/>
      <h1>Hello React</h1>
      <p>Nama saya galih </p>
      <Top />
      <List/>
      <Footer />
      </center>
    </div>
  );
};

//export default
export default App; 