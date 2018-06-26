import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Grid>
            <Jumbotron>
                <h2>Welcome to my Coffee Shop</h2>
                <p>This is the best place where you can buy naturall coffee</p>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Jumbotron>
            <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="../assets/person-1.jpg" circle className="profile-pic"/>
                    <h3>Coffee1</h3>
                    <p>Any little thing can be your friend if you let it be. Take your time. Speed will come later. We can fix anything. Here we're limited by the time we have.</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="../assets/person-2.jpg" circle className="profile-pic"/>
                    <h3>Coffee1</h3>
                    <p>Any little thing can be your friend if you let it be. Take your time. Speed will come later. We can fix anything. Here we're limited by the time we have.</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="../assets/person-3.jpg" circle className="profile-pic"/>
                    <h3>Coffee1</h3>
                    <p>Any little thing can be your friend if you let it be. Take your time. Speed will come later. We can fix anything. Here we're limited by the time we have.</p>
                </Col>
            </Row>
        </Grid>
    )
  }
}
