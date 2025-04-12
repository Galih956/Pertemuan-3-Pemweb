// import libraries;
import React from "react"
import Header from "./header";
import "./App.css";
import Footer from "./footer.jsx";
import List from "./list.jsx";
// membuat komponen dengan class


//create component
const app = () => {
  return (
    <div>
      <center>
      <Header />
      <h1>Hello React</h1>
      <p>Nama saya galih </p>
      <List/>
      <Footer />
      </center>
    </div>
  );
};

//export default
export default app; 