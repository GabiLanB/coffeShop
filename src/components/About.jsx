import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
        <div>
            <Image src="assets/about.jpg" className="header-image" />
            <Grid>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                    <h3>Happy Smile</h3>
                    <p>All you have to do is let your imagination go wild. You better get your coat out, this is going to be a cold painting. Talk to trees, look at the birds. Whatever it takes.</p>
                    <p>Little trees and bushes grow however makes them happy. This is the way you take out your flustrations. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death.</p>
                    <p>Just think about these things in your mind - then bring them into your world. Clouds are free they come and go as they please. The little tiny Tim easels will let you down.</p>
                    <p>Let's make a happy little mountain now. Anything you want to do you can do here. We don't want to set these clouds on fire.</p>
                </Col>
            </Grid>
        </div>
    )
  }
}
