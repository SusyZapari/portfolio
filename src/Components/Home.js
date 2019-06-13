import React, { Component } from 'react';
import personalMark from '../images/marcapersonal.png';
import { Jumbotron, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
            <h1 className="display-3">Susana Zápari</h1>
            <p className="lead">Front end Developer</p>
        </Jumbotron>
        <p>"Agua pasa por mi casa cate de mi corazon el que me lo adivine es un burro cabezon"</p>
        <img src={personalMark} alt="personalMark"/>
      </div>
      );
    }
}

export default Home;