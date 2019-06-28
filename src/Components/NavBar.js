import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faEnvelopeSquare, faAddressCard } from '@fortawesome/free-solid-svg-icons'

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
                <Navbar color="faded" light expand="md" sticky="top">
                    <NavbarBrand href="/" className="mr-auto"><FontAwesomeIcon icon={faHome}color='pink'/></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/#/"><FontAwesomeIcon icon={faAddressCard} color='pink'/>  About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><FontAwesomeIcon icon={faBriefcase} color='pink'/>  Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><FontAwesomeIcon icon={faEnvelopeSquare} color='pink'/>  Contact me</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;