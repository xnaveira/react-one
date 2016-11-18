import React from "react";
import { Grid, Row, Col, Panel, FormGroup, FormControl, Button, InputGroup } from "react-bootstrap"

export default class Player extends React.Component {

   render() {
      return (
        <Grid fluid>
          <br/>
          <Row>
            <Col sm={12} md={12}>
              <div class="embed-responsive embed-responsive-16by9">
                <video class="embed-responsive-item" src="http://ipfs.io/ipfs/QmX4ZZSGA6HLtwGkDmaEBmTyqZhWjcJQcoydrdmiBmnxXZ" controls/>
              </div>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={1} md={1}/>
            <Col sm={10} md={10}>
              <Panel fluid>
                <h2>Guardians Of The Galaxy Trailer</h2>
                <p>Blah blah information blah blah</p>
              </Panel>
            </Col>
            <Col sm={1} md={1}/>
          </Row>
          <Row>
            <Col sm={1} md={1}/>
            <Col sm={10} md={10}>
              <Panel fluid>
                <p><b>Uploaded by </b><i>Toby</i><b> on 16/11/2016</b></p>
                <p>Check out this cool video :o !!!!!</p>
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
