import React from "react";
export default class Movie extends React.Component {
	render () {
	    return (
		<a href={this.props.playable.link}>
		    <img src={this.props.playable.img} />
		</a>
	    );
	}
}
