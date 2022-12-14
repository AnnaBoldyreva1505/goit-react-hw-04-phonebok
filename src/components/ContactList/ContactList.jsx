import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';


export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
            contactId={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};