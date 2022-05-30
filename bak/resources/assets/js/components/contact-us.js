import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class ContactUs extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
   const data = new FormData(event.target);
    axios.post(`contact-us`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div>
      <h1>How Can We Help?</h1>
      <p>Have a project you want some advice on?  Tell us your ideas! We will toss around some concepts and get back to you within 1 business day.  If you have images or files you'd like us to see feel free to email us directly at <a href="mailto:contact@bwa-designs.com">contact@bwa-designs.com</a>.</p>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label for="urgency">Project Timeline</Label>
          <Input type="select" name="urgency">
            <option></option>
            <option>ASAP</option>
            <option>2-3 Weeks</option>
            <option>1-3 Months</option>
            <option>3-6 Months</option>
            <option>6+ Months</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="scope">Project Size (Best Guess is fine)</Label>
          <Input type="select" name="scope">
            <option></option>
            <option>5-10 Hours</option>
            <option>10-20 Hours</option>
            <option>20-50 Hours</option>
            <option>50+ Hours</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="desc">Description</Label>
          <Input type="textarea" name="desc" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}