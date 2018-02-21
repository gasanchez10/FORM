import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form,FormGroup,FormControl, ControlLabel, Button} from 'react-bootstrap'

class App extends Component {
  render() {
    return (

<div>
      <form  className="Hola">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"/></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit" id="button">Send</button>
      </p>
    </form>

    </div>
    );
  }
}

export default App;



