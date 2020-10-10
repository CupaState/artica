import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import NewHeader from "./Components/NewHeader";
import Footer from "./Components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

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
        className="hidden-app"
        id="preloader"
      >
        <span className="preloader-text">ARTIKA</span>
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
  const wrapper = document.getElementById("app-wrapper");
  wrapper.classList.add("load");
  const preloader = document.getElementById("preloader")
  preloader.classList.add("hide");
}

export default App;
