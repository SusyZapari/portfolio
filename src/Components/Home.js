import React, { Component } from 'react';
import personalMark from '../images/marcapersonal.png';
import { Jumbotron } from 'reactstrap';
import NavBar from './NavBar';
import Portfolio from './Portfolio';


class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
            <h1 className="display-3">Susana Zápari</h1>
            <p className="lead">Front end Developer</p>
        </Jumbotron>
        <p>"Educating the mind without educating the heart is no education at all". Aristotle</p>
        <img src={personalMark} alt="personalMark"/>
      </div>
      );
    }
}

export default Home;