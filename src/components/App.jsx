import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in the contact list`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // Работа с локальным хранилищем - записала contscts  в локальное хранилище
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // получила данные из локального хранилища на страницу после перезагрузки
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const pasredContacts = JSON.parse(contacts);

    if (pasredContacts) {
      this.setState({ contacts: pasredContacts });
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();



    
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <h2> Contacts</h2>

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
