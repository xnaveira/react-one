import React from "react";
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap"



export default class Header extends React.Component {
    render() {
    	return (
	    <Navbar fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <IndexLinkContainer to={{ pathname: '/'}}>
            <Navbar.Brand>
              P2FLIX
            </Navbar.Brand>
          </IndexLinkContainer>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to={{ pathname: '/'}}>
              <NavItem eventKey={1}>
                Index
              </NavItem>
            </IndexLinkContainer>
            <LinkContainer to={{ pathname: 'listing' }}>
              <NavItem eventKey={2}>
                Videos
              </NavItem>
            </LinkContainer>
          </Nav>
          <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit"><Glyphicon glyph="search"/></Button>
          </Navbar.Form>
          <Navbar.Text pullRight>
            <Button bsSize="xsmall"><Glyphicon glyph="log-in"/></Button>
          </Navbar.Text>
        </Navbar.Collapse>
	    </Navbar>
	);
    }
}
