import React, { Component } from 'react';
import personalMark from '../images/marcapersonal.png';
import { Jumbotron } from 'reactstrap';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Wallpaper from '../images/wallpaper1.jpeg';
import './Home.css';




class Home extends Component {
  render() {
    return (
      <section className= "component homeBackground">
        <Jumbotron fluid>
            <h1 className="display-3 text-white myName">Susana Zápari</h1>
            <h3 className="text-white">Front end Developer</h3>
        </Jumbotron>
        <p className="text-muted" Educating the mind without educating the heart is no education at all Aristotle></p>
        {/* <img src={personalMark} alt="personalMark"/> */}
      </section>
      
      );
    }
}

export default Home;