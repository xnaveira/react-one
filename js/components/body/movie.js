import React from "react";
import Video from "react-videojs";

export default class Movie extends React.Component {
    	handleChange() {
	    this.props.changeValue(this.props.playable.title);
	}
	render () {
	    return (
	    	<div>
				<div>
					<Video
						src="http://www.w3schools.com/html/mov_bbb.mp4"
						type="video/mp4"
						onPlay={this.handlePlay}
					/>
				</div>
				<div>
					<a href={this.props.playable.link} onMouseOver={this.handleChange.bind(this)} >
						<img  src={this.props.playable.img} />
					</a>
				</div>
			</div>
	    );
	}
}
