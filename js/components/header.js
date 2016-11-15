import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
export default class Header extends React.Component {
    render() {
    	return (
	    <Navbar collapseOnSelect>
		<Navbar.Header>
		    <Navbar.Brand>
			<a href="#">Uflix</a>
		    </Navbar.Brand>
		</Navbar.Header>
		<Navbar.Collapse>
		    <Nav>
			<NavItem eventKey={1} href="#">Movies</NavItem>
			<NavItem eventKey={1} href="#">TV Shows</NavItem>
		    </Nav>
	    </Navbar.Collapse>
	    </Navbar>
	); 
    }
}
