import React from "react";

import Movie from "./body/movie"

export default class Body extends React.Component {
    render_movie(arr) {
	return arr.map((m, index) => <Movie key={index} playable={m} />);
    }
    render() {
	return (
	    <div>
		{this.render_movie(this.props.playables)}
	    </div>
	)
    }
}
