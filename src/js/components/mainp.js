import React from "react";

import Header from "./header";
import Footer from "./footer";
import Body from "./body";

export default class MainP extends React.Component {
    constructor() {
	super();
	this.state = {
	    images: Array.of(
		"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
		"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg",
		"https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
	    )
	}
    }
    render() {
    	return (
	  <div>
	      <Header />
	      <Body images={this.state.images}/>
	      <Footer />
	  </div>
	);
    }
}
