import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <p className={css.contact_name}>{contact.name}</p>
          <p className={css.contact_number}>{contact.number}</p>
          <button
            className={css.button}
            onClick={() => onRemoveContact(contact.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};