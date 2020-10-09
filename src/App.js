import React, { Component } from 'react';
import './App.css';
import Preloader from "./Preloader/Preloader";
import NewHeader from "./Components/NewHeader";
import Footer from "./Components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App (){

  return (
    <div className="App">
      <NewHeader/>
      <Footer/>
    </div>
  );
}

export default App;
