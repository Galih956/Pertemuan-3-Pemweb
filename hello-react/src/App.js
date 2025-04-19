// import libraries;
import React from "react"
import Header from "./header";
import "./App.css";
import Footer from "./footer.jsx";
import List from "./list.jsx";
import Top from "./top.js";
// membuat komponen dengan class


//create component
const app = () => {
  return (
    <div className="app">
      <center>
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
export default app; 