import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

export default class Root extends Component {
  render() {
    return (
      <Container className="App" fluid={true}>
        <Row>
          <Col xs="12" md="6">
        <div id="word-gear" style={{width: '100%', height: '100%'}} data-wordart-src="//cdn.wordart.com/json/hb0phh2omozg" data-wordart-show-attribution></div>
        </Col>
        <Col>
        Why Choose Us?
If the reasons you have already read were not enough, we can provide one more. You should choose us because we will treat your project like our own. We are not interested in just “getting the job done”, we want every creation we put out onto the web to be something we are proud to call our own. If you are not happy with something we create, then neither are we. It’s as simple as that.

How Are We Different?
Besides the above we are quite different in our approach to... well, everything. We don’t think outside the box, we LIVE there. We pride ourselves on providing unique solutions to complex problems. More than that we pride ourselves on designing the RIGHT way not the easy way. Anything we create should be easy for someone else to pick up and run with. Why do we make it so easy for someone else to add on to our work? Because it’s the right way to design. Obfuscating code is just not our way.

What Don’t We Do?
You may think this an odd question, but what we DON’T do is just as important as what we DO. Many (in fact most) companies who design for the web today use frameworks like Django or Ruby on Rails. These frameworks are meant to speed up design time, allowing programmers to complete more contracts faster. Sounds great, right? There is only one problem with that: performance suffers. See that giant blue line? That is the speed of pure code. Click on the link if you want to read up on the data, but the short of it is very little is faster than core code without a framework. Why don’t more companies code that way? Well that is simple. It is harder, developers cost more, and it frequently can take longer. We focus on building core sites and structures that are infinitely scalable and won’t have to be rebuilt from scratch every time you want to add to or adapt your current design.

WHAT DO WE DO?
We code, we design, we implement, we develop… essentially we do whatever is needed to complete the task. We are multilingual, no we don’t speak another language, but we code in many. By broadening our expertise we see a bigger piece of the puzzle than some. This allows us to build things that others may miss due to a more narrow knowledge set.

Who We Are
We are a small group of like-minded coders and designers whose primary goals are making the net a better place, and enjoying ourselves as much as possible along the way. What, don’t think you can be professional without taking yourself too seriously? We would love the opportunity to prove otherwise.

API Connections
Today's modern web software revolves around creating and consuming application interfaces.  Here we will create small/simple integrations to all the API's we work with regularly.  These serve to show you what can be done, and perhaps inspire some ideas for your own website!

</Col>
</Row>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Container>
    );
  }
}