import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Link, Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelopeSquare, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: false
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    render() {
        return (
            <div>
                <section className= "header">
                <Navbar color="faded" light expand="md" sticky="top">
                    {/* <NavbarBrand href="/" className="mr-auto"><FontAwesomeIcon icon={faHome}color='pink'/></NavbarBrand> */}
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink  className='btnhome navBarText' href='#AboutMe'><FontAwesomeIcon icon={faAddressCard} color='pink'/> About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='btnportfolio navBarText' href='#Portfolio'><FontAwesomeIcon icon={faBriefcase} color='pink'/> Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className= 'navBarText' href="mailto:zapari.developer@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} color='pink'/> Contact me</NavLink>
                            </NavItem>
                            <NavItem>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </section>
            </div>
        );
    }
}

export default NavBar;


