import React from 'react';
import AboutMe from './Components/AboutMe';
import './App.css';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      

    </div>
  );
}

export default App;
