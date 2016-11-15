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
						src="http://ipfs.io/ipfs/QmX4ZZSGA6HLtwGkDmaEBmTyqZhWjcJQcoydrdmiBmnxXZ"
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
