import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import NewHeader from "./Components/NewHeader";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const Sakura = lazy(()=>import("./Components/Sakura"));

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      isOpenSakura: false,
    }
    this.openSakura = this.openSakura.bind(this);
    this.closeSakura = this.closeSakura.bind(this);
  }

  openSakura()
  {
    this.setState({ isOpenSakura: true});
    const app = document.getElementById("app-wrapper");
    app.classList.add("hide");
  }

  closeSakura()
  {
    this.setState({ isOpenSakura: false })
    const app = document.getElementById("app-wrapper");
    app.classList.remove("hide");
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
          <Footer openSakura={ this.openSakura }/>
        </div>
        <Suspense fallback={<div></div>}>
          <Sakura
            isOpenSakura={ this.state.isOpenSakura }
            closeSakura={ this.closeSakura }
          />
        </Suspense>
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
