import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

export const Contact = ({
  name,
  number,
  onDeleteContact,
  contactId,
}) => {
  return (
    <>
      {name} : {number}{' '}
      <button className={css.btn} type="button" onClick={() => onDeleteContact(contactId)}>
        Delete
      </button>
      ;
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
