import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
            <small className="w-100 bg-light p-1" style={{position: "fixed", bottom: 0}}> Copywrite &copy; 2019 BWA-Designs</small>
    );
  }
}