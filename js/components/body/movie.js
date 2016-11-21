import React from "react";
import { Thumbnail } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"



export default class Movie extends React.Component {
	render () {
    const path = `/player/${this.props.playable.id}`
    const { title, description, uploaded_by, created } = this.props.playable
    const img = `http://ipfs.io/ipfs/${this.props.playable.img}`
		return (
			<div>
			  <LinkContainer to={{ pathname: path }}>
			    <Thumbnail src={img} >
			      <h3>{title}</h3>
						<p>{description}</p>
						<p>By <b>{uploaded_by}</b> - {created}</p>
			    </Thumbnail>
			  </LinkContainer>
			</div>
		)
	}
}
