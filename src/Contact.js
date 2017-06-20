import React, { Component } from 'react';
import './App.css';

export default class Contact extends Component {
  render() {
    return (
      <li>
        {this.props.contact.name} {this.props.contact.phone}
      </li>

    );
  }
}
