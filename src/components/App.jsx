import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //   // получила данные из локального хранилища на страницу после перезагрузки
  //   componentDidMount() {
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const pasredContacts = JSON.parse(contacts);

    if (pasredContacts) {
      setContacts(pasredContacts);
    }
  }, []);


  useEffect(() => {
if (setContacts !== prevContacts) {
        localStorage.setItem('contacts', JSON.stringify(setContacts));
      }
  }, [contacts]);

  //   // Работа с локальным хранилищем - записала contscts  в локальное хранилище
  //   componentDidUpdate(prevProps, prevState) {
  //     if (setContacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(setContacts));
  //     }
  //   }



    const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(({ id }) => id !== contactId))
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  //  const addContact = ( name, number ) => {
  //     const newContact = { id: nanoid(), name, number };

  //     contacts.find(contact => contact.name === name)
  //       ? alert(`${name} is already in the contact list`)
  //       : setContacts((contacts) => ({
  //           setContacts([newContact, ...contacts]),
  //         }));
  //   };

  //   getVisibleContacts = () => {
  //     const { filter, contacts } = this.state;
  //     const normalizedFilter = filter.toLowerCase();

  //     return contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(normalizedFilter)
  //     );
  //   };

  //   // Работа с локальным хранилищем - записала contscts  в локальное хранилище
  //   componentDidUpdate(prevProps, prevState) {
  //     if (setContacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(setContacts));
  //     }
  //   }

  //   // получила данные из локального хранилища на страницу после перезагрузки
  //   componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const pasredContacts = JSON.parse(contacts);

  //     if (pasredContacts) {
  //       this.setState({ contacts: pasredContacts });
  //     }
  //   }

  return (
    <div>
      {/* <ContactForm onSubmit={addContact} /> */}
      <h2> Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />

      {/* <ContactList
          // contacts={visibleContacts}
          // onDeleteContact={deleteContact}
        /> */}
    </div>
  );
};

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const newContact = { id: nanoid(), name, number };

//     contacts.find(contact => contact.name === name)
//       ? alert(`${name} is already in the contact list`)
//       : this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   // Работа с локальным хранилищем - записала contscts  в локальное хранилище
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   // получила данные из локального хранилища на страницу после перезагрузки
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const pasredContacts = JSON.parse(contacts);

//     if (pasredContacts) {
//       this.setState({ contacts: pasredContacts });
//     }
//   }

//   render() {
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div>
//         <ContactForm onSubmit={this.addContact} />
//         <h2> Contacts</h2>

//         <Filter value={this.state.filter} onChange={this.changeFilter} />

//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

export default App;
