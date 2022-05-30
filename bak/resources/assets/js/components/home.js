import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
        <Row>
          <Col xs="12" md="6">
            <div id="word-gear" style={{width: '100%', height: '650px'}} data-wordart-src="//cdn.wordart.com/json/soc85l6xgh10" data-wordart-show-attribution></div>
            </Col>
            <Col className="about pt-2">
              <h1>Who We Are</h1>
              <p>We are a small group of like-minded coders and designers whose primary goals are making the net a better place, and enjoying ourselves as much as possible along the way. What, don’t think you can be professional without taking yourself too seriously? We would love the opportunity to prove otherwise.</p>
              <h3>Why Choose Us?</h3>
              <p>You should choose us because we will treat your project like our own. We are not interested in just “getting the job done”, we want every creation we put out onto the web to be something we are proud to call our own. If you are not happy with something we create, then neither are we. It’s as simple as that.</p>

              <h3>How Are We Different?</h3>
              <p>You may have noticed we are quite different in our approach.  Conversational rather than "Marketing Speak". We don’t think outside the box, we LIVE there. We pride ourselves on providing unique solutions to complex problems. More than that we pride ourselves on designing the RIGHT way not the easy way. Anything we create should be easy for someone else to pick up and run with. Why do we make it so easy for someone else to add on to our work? Because it’s the right way to design.</p>

              <h3>What Do We Do?</h3>
              <p>We code, we design, we implement, we develop… essentially we do whatever is needed to complete the task. We are multilingual, no we don’t <strong>speak</strong> other languages, but we code in many. By broadening our expertise we see a bigger piece of the puzzle than some. This allows us to build things that others may miss due to a more narrow knowledge set.</p>


    {/*          API Connections
              Today's modern web software revolves around creating and consuming application interfaces.  Here we will create small/simple integrations to all the API's we work with regularly.  These serve to show you what can be done, and perhaps inspire some ideas for your own website!

    */}
          </Col>
        </Row>
    );
  }
}