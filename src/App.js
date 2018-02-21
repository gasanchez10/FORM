import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form,FormGroup,FormControl, ControlLabel, Button} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Form inline className="Hola"   name="Form-1" netlify>
  <FormGroup controlId="formInlineName">
    <ControlLabel>Name</ControlLabel>{' '}
    <FormControl type="text" placeholder="German Sanchez" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <ControlLabel>Email</ControlLabel>{' '}
    <FormControl type="email" placeholder="pasante@bvc.com" />
  </FormGroup>{' '}
  <Button type="submit">Send invitation</Button>
</Form>
    );
  }
}

export default App;



