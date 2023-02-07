import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ removeContact, contacts }) => {
  const contactsNumbers = contacts.map(({ id, name, number }) => (
    <li className={css.block__contactsList} key={id}>
      Name: {name} Number: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul className={css.block__contacts}>{contactsNumbers}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
