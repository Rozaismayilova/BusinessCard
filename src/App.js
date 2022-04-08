import React from "react"
import './App.css';
import Info from "./Components/Info";
import Buttons from "./Components/Buttons"
import About from "./Components/About"
import Interests  from "./Components/Interests";
import Footer from "./Components/Footer";
import roza from "./Components/images/roza.jpeg"


function App() {
  return (
    <div className="App">
      <div className="business-card">
        <div className="image">
          <img src={roza} className="image" alt="roza"></img>
        </div>
        <div className="information">
          <Info/>
          <Buttons/>
          <About/>
          <Interests/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
