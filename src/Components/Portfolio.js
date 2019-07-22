import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';

    class Portfolio extends Component {
        render (){
            return (
                <div>
                    <hr></hr> <h1>Portfolio</h1> 
                    
                    <CardGroup> 
                        <Card>
                            <CardBody>
                                <CardTitle>BurgerQueen</CardTitle>
                                <CardImg></CardImg>
                                <CardText>This is an App for a restaurant to get a better and optimic 
                                    time and service where the waiter be able to take your order (burgers 
                                    and beverages) and send it to kitchen.</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Veggie Happy</CardTitle>
                                <CardText>This is an App to create a social network through a cool 
                                community for people who doesn't eat meat (Vegetarian o vegan) to have
                                recomendations about food,restaurants, recipies, vegan places and 
                                specialists as Nutritionist or Doctors.
                                </CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Eye Road</CardTitle>
                                <CardText>Road eye App is an application that is aimed at members of road 
                                agencies. This application evaluates the indicators of injuries in the different 
                                means of transport in the USA to be able to make impact decisions for road 
                                awareness programs and thus have a reference of them.</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Memoraland</CardTitle>
                                <CardText>Memoraland is a traditional memory game in 2D, where you should 
                                identify two equal figures to obtain pairs.
                                It is a simple and once entertaining game thought mainly for the early 
                                stages of life, where children can learn at the same time to play.</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            );
        }
    }
    export default Portfolio;