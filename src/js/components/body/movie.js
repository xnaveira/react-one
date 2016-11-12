import React from "react";
export default class Movie extends React.Component {
	render () {
	    console.log("Moviekk")
	    return <img src={this.props.image}></img>;
	}
}
