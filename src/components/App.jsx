import { nanoid } from 'nanoid';

import React, { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export function App() {
  const initialContacts = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // localStorage

  useEffect(() => {
    const contactsLocalStorage = localStorage.getItem('contacts');

    if (contactsLocalStorage) {
      const contactsList = JSON.parse(contactsLocalStorage);
      setContacts(contactsList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };


const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter)
);

  return (
    <div className={css.container}>
      <h1 className={css.sectionTitle}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.sectionTitle}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={removeContact}
        />
      ) : (
        <p>Contact with such name was not found</p>
      )}
    </div>
  );
}