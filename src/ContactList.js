import React, { Component } from 'react';
import Contact from './Contact';
import './App.css';

export default class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }

  render() {
    let filteredContacts = this.props.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <ul>
          {
            filteredContacts.map((contact) => (
              <Contact contact={contact} key={contact.id} />
            ))
          }
        </ul>
        <input type="text" value={this.state.search}
          onChange={this.updateSearch.bind(this)}

        />
      </div>

    );
  }
}
