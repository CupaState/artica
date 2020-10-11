import React, { Component } from 'react';
import './App.css';
import NewHeader from "./Components/NewHeader";
import Footer from "./Components/Footer";


import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div>
        <div
          className="cssload-preloader"
          id="preloader"
        >
          <span>A</span>
          <span>R</span>
          <span>T</span>
          <span>I</span>
          <span>K</span>
          <span>A</span>
        </div>
      <div className="App" id="app-wrapper">
        <NewHeader/>
        <Footer/>
      </div>
      </div>

    );
  }
}

window.onload = function()
{
  setTimeout(()=>{
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide");
    const wrapper = document.getElementById("app-wrapper");
    wrapper.classList.add("load");
  }, 1000)

}

export default App;
