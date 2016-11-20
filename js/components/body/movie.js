import React from "react";
import { LinkContainer } from "react-router-bootstrap"



export default class Movie extends React.Component {
	render () {
    const path = `/player/${this.props.playable.id}`
    const img = `http://ipfs.io/ipfs/${this.props.playable.img}`
		return (
		  <div>
				<LinkContainer to={{ pathname: path }}>
					<img  src={img} />
				</LinkContainer>
      </div>
	    )
	}
}
// <div>
// 	<Link to="/player/${this.props.playable.title}" >
// 		<img  src={this.props.playable.img} />
// 	</Link>
// </div>