import React from "react";

import Movie from "./body/movie"

export default class Body extends React.Component {
    render_movie(arr) {
	return arr.map((m, index) => <Movie key={index} image={m} />);
    }
    render() {
	const img = this.props.images;
	return (
	    <div>
		{this.render_movie(img)}
	    </div>
	)
    }
}
