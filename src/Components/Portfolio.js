import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import logo from '../images/logo.png';
import VeggieHappy from '../images/VeggieHappy.jpg';
import RoadEye from '../images/RoadEye.png';
import memoraland from '../images/memoraland.png';


    class Portfolio extends Component {
        render (){
            return (
                <div>
                    <hr></hr> <h1>Portfolio</h1> 
                    
                    <CardGroup> 
                        <Card>
                            <CardBody>
                                <CardTitle>BurgerQueen</CardTitle>
                                <CardImg className='logo' background fluid src={logo}></CardImg>
                                <CardText>This is an App for a restaurant to get a better and optimic 
                                    time and service where the waiter be able to take your order (burgers 
                                    and beverages) and send it to kitchen.</CardText>
                                <Button href="https://github.com/SusyZapari/gdl002-burger-queen"rel="noopnener noreferrer"target="_blank">View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Veggie Happy</CardTitle>
                                <CardImg className='VeggieHappy' background fluid src={VeggieHappy}></CardImg>
                                <CardText>This is an App to create a social network through a cool 
                                community for people who doesn't eat meat (Vegetarian o vegan) to have
                                recomendations about food, restaurants, recipies, vegan places and 
                                specialists as Nutritionist or Doctors.
                                </CardText>
                                <Button href="https://github.com/SusyZapari/GDL002-social-network"rel="noopener noreferrer"target="_blank">View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Road Eye</CardTitle>
                                <CardImg className='RoadEye' background fluid src={RoadEye}></CardImg>
                                <CardText>Road eye App is an application to evaluates the indicators of injuries 
                                in the different kind of transport in USA to be able to make impact decisions for road 
                                awareness programs and thus have a reference of them.</CardText>
                                <Button href="https://github.com/SusyZapari/GDL002-data-lovers"rel="noopener noreferrer"target="_blank">View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Memoraland</CardTitle>
                                <CardImg className='memoraland' background fluid src={memoraland}></CardImg>
                                <CardText>Memoraland is a traditional memory game in 2D, where you should 
                                identify two equal figures to obtain pairs.
                                It is a simple and once entertaining game thought mainly for the early 
                                stages of life, where children can learn at the same time to play.</CardText>
                                <Button href="https://github.com/SusyZapari/GDL002-mobile-game"rel="noopener noreferrer"target="_blank">View more</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            );
        }
    }
    export default Portfolio;