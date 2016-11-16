import React from "react"
import { Grid, Col, Row } from "react-bootstrap"
import Movie from "../components/body/movie"

export default class Listing extends React.Component {
  constructor() {
    super();
    this.state = {
      playables: Array.of(

        { 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          link: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          title: "Avengers"
        },
        { 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg",
          link: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg",
          title: "Guardians of the Galaxy"
        },
        { 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          link: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          title: "Ironman"
        }
      )
    }

  }
  static render_movie(arr) {
    return arr.map( (m, index) =>
      <Col lg={2} md={5} sm={10}><Movie key={index} playable={m}/></Col>);
  }

  render() {
    return (
      <Grid>
        <Row>
          {Listing.render_movie(this.state.playables)}
        </Row>
      </Grid>
    );
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