import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewHeader from "./Components/NewHeader";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NewHeader/>
      <Footer/>
    </div>
  );
}

export default App;
