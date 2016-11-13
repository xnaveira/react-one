import React from "react";
export default class Movie extends React.Component {
    	handleChange() {
	    this.props.changeValue(this.props.playable.title);
	}
	render () {
	    return (
		<a href={this.props.playable.link} onMouseOver={this.handleChange.bind(this)} >
		    <img  src={this.props.playable.img} />
		</a>
	    );
	}
}
