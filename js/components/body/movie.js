import React from "react";
import { Link } from "react-router"



export default class Movie extends React.Component {
	render () {
		return (
			<div>
				<Link to="/player/${this.props.playable.title}">
					<img  src={this.props.playable.img} />
				</Link>
			</div>
	    );
	}
}
// <div>
// 	<Link to="/player/${this.props.playable.title}" >
// 		<img  src={this.props.playable.img} />
// 	</Link>
// </div>