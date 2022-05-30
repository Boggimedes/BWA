import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home';
import ContactUs from './components/contact-us';
import * as serviceWorker from './serviceWorker';
import { Container, Row, Col } from 'reactstrap';

const routing = (
  <Router>
    <div>
	<Header></Header>
	<Container fluid={true} className="gear-back">
	<Row>
	<Col>
	</Col>
	</Row>
      <Route exact path="/" component={Home} />
      <Route path="/contact-us" component={ContactUs} />
  </Container>
	<Footer></Footer>
   </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


