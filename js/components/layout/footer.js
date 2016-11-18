import React from "react";
import { Panel, Navbar } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
    	return (
    	  <Navbar fixedBottom>
          <Navbar.Text>
              This is a side project. 2016
          </Navbar.Text>
        </Navbar>
	);
    }
}
