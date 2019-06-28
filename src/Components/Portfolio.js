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
                                <CardText>Description</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Veggie Happy</CardTitle>
                                <CardText>Description</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Eye Road</CardTitle>
                                <CardText>Description</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Memoraland</CardTitle>
                                <CardText>Description</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Cipher</CardTitle>
                                <CardText>Description</CardText>
                                <Button>View more</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            );
        }
    }
    export default Portfolio;