import React from "react";
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { IndexLink, Link } from "react-router";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap"



export default class Header extends React.Component {
    render() {
    	return (
	    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="#">
              Uflix
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <IndexLinkContainer to={{ pathname: '/'}}>
            <NavItem eventKey={1}>
              Search
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to={{ pathname: 'listing' }}>
            <NavItem eventKey={2}>
              Videos
            </NavItem>
          </LinkContainer>
        </Nav>
	    </Navbar>
	); 
    }
}
