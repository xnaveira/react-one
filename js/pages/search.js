import React from "react"
import { Grid, Col, Row, Navbar, FormGroup, FormControl, Button } from "react-bootstrap"


export default class Search extends React.Component {

   render() {
      return (
        <Grid>
           <Row>
              <Col lg={2} md={5} sm={10}>
                <Navbar.Form pullLeft>
                  <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                  </FormGroup>
                  {' '}
                  <Button type="submit">Submit</Button>
                </Navbar.Form>
              </Col>
           </Row>
        </Grid>

      );
   }
}