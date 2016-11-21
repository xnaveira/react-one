import React from "react";
import { Grid, Row, Col, Panel, FormGroup, FormControl, Button, InputGroup } from "react-bootstrap"
import PlayableStore from "../stores/playablestore"
import * as PlayableActions from "../actions/playableactions"

export default class Player extends React.Component {

  constructor() {
    super()
    this.getPlayableFromStore = this.getPlayableFromStore.bind(this)
    this.state = {
      playable: {}
    }
  }

  componentWillMount() {
    PlayableStore.on("playableupdated", this.getPlayableFromStore)
    PlayableActions.loadPlayable(this.props.params.playable)
  }

  componentWillUnmount() {
    PlayableStore.removeListener("playableupdated", this.getPlayableFromStore)
  }

  getPlayableFromStore() {
    this.setState({
      playable: PlayableStore.getPlayable(),
    })
  }

  render() {
    const { playable } = this.state
    const { title, description, uploaded_by, created, creator_comment } = playable
    const playable_url = `http://ipfs.io/ipfs/${playable.link}`
    return (
      <Grid fluid>
        <Row>
          <Col sm={1} md={1}/>
          <Col sm={10} md={10}>
            <div class="embed-responsive embed-responsive-16by9">
              <video class="embed-responsive-item" src={playable_url} controls/>
            </div>
          </Col>
          <Col sm={1} md={1}/>
        </Row>
        <br/>
        <Row>
          <Col sm={1} md={1}/>
          <Col sm={10} md={10}>
            <Panel fluid>
              <h2>{title}</h2>
              <p>{description}</p>
            </Panel>
          </Col>
          <Col sm={1} md={1}/>
        </Row>
        <Row>
          <Col sm={1} md={1}/>
          <Col sm={10} md={10}>
            <Panel fluid>
              <p><b>Uploaded by </b><i>{uploaded_by}</i><b> on {created}</b></p>
              <p>{creator_comment}</p>
            </Panel>
          </Col>
          <Col sm={1} md={1}/>
        </Row>
        <Row>
          <Col sm={1} md={1}/>
          <Col sm={10} md={10}>
            <Panel fluid>
              <h4>Comments</h4>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" placeholder="Add comment..."/>
                  <InputGroup.Button>
                    <Button>Post</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
              <Panel fluid>
                <p>Awesome! :D</p> - <b>Bob</b>
              </Panel>
              <Panel fluid>
                <p>They need to make a second already!</p> - <b>Alex</b>
              </Panel>
            </Panel>
          </Col>
          <Col sm={1} md={1}/>
        </Row>
        <br />
        <br />
      </Grid>
    );
   }
}
