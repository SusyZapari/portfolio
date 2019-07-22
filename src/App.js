import React from 'react';
import AboutMe from './Components/AboutMe';
import './App.css';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import NavBar from './Components/NavBar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';


function App() {
  return (
    <div className="App">
     <NavBar/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Modal/>
      
      
      

    </div>
  );
}

export default App;
