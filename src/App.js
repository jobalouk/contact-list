import React, { Component } from 'react';
import ContactList from './ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contacts List</h1>
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

export default App;
