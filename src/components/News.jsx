import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
        <div>
            <Image src="assets/news.jpg" className="header-image" />
            <Grid>
                <h2>News</h2>
                <Row>
                    <Col xs={12} sm={8} className="main-section">
                        <p>Now we don't want him to get lonely, so we'll give him a little friend. We don't have anything but happy trees here. Now then, let's play.</p>

                        <p>Imagination is the key to painting. You can do anything here - the only pre-requisite is that it makes you happy. We'll throw some old gray clouds in here just sneaking around and having fun.</p>

                        <p>These little son of a guns hide in your brush and you just have to push them out. You can do anything here. So don't worry about it. Every highlight needs it's own personal shadow.</p>

                        <p>That is when you can experience true joy, when you have no fear. It's amazing what you can do with a little love in your heart. The only prerequisite is that it makes you happy. If it makes you happy then it's good.</p>

                        <p>We wash our brush with odorless thinner. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Automatically, all of these beautiful, beautiful things will happen.</p>
                    </Col>
                    <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/News-1.jpg" rounded />
                        <p>We'll take a little bit of Van Dyke Brown. It's important to me that you're happy. But they're very easily killed. Clouds are delicate.</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
}
