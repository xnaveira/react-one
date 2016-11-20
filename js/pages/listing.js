import React from "react"
import { Grid, Col, Row } from "react-bootstrap"
import Movie from "../components/body/movie"
import PlayableStore from "../stores/playablestore"
import * as PlayableActions from "../actions/playableactions"


export default class Listing extends React.Component {
  constructor() {
    super()
    this.getAllPlayablesFromStore = this.getAllPlayablesFromStore.bind(this)
    this.state = {
      playables: []
    }
  }

  componentWillMount() {
    PlayableStore.on("allplayablesupdated", this.getAllPlayablesFromStore)
    PlayableActions.loadAllPlayables()
  }

  componentWillUnmount() {
    PlayableStore.removeListener("allplayablesupdated", this.getAllPlayablesFromStore)
  }

  getAllPlayablesFromStore() {
    this.setState({
      playables : PlayableStore.getAllPlayables(),
    })
  }

  render_movie(arr) {
    return arr.map( (m) => {
      return (
          <Col md={2} sm={2}><Movie key={m.id} playable={m}/></Col>
      )
    })
  }

  render() {
    console.log("listing::render ", this.state.playables)
    return (
      <Grid>
        <br/><br/><br/><br/>
        <Row>
          {this.render_movie(this.state.playables)}
        </Row>
      </Grid>
    )
  }
}

// <Grid>
//   <Row>
//     <Col lg={2} md={5} sm={10}>
//       <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg" />
//     </Col>
//     <Col lg={2} md={5} sm={10}>
//       <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg" />
//     </Col>
//     <Col lg={2} md={5} sm={10}>
//       <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg" />
//     </Col>
//     <Col lg={2} md={5} sm={10}>
//       <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg" />
//     </Col>
//     <Col lg={2} md={5} sm={10}>
//       <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg" />
//     </Col>
//   </Row>
// </Grid>