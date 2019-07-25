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
      <div>
        <Jumbotron fluid>
        <div> 
          <img className='wallpaper1' background fluid src={Wallpaper}/>
          </div>
            <h1 className="display-3">Susana Zápari</h1>
            <p className="lead">Front end Developer</p>
        </Jumbotron>
        <p className="text-muted" Educating the mind without educating the heart is no education at all Aristotle></p>
        <img src={personalMark} alt="personalMark"/>
      </div>
      
      );
    }
}

export default Home;