import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { addContactToStore } from '../../redux/contacts/contacts.slice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState(
    () => JSON.parse(localStorage.getItem('name')) ?? ''
  );
  const [number, setNumber] = useState(
    () => JSON.parse(localStorage.getItem('number')) ?? ''
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        localStorage.setItem('name', JSON.stringify(value));
        setName(value);
        break;

      case 'number':
        localStorage.setItem('number', JSON.stringify(value));
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    //contacts.some is not a function error because mutable state.contacts in slice
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      setName('');
      localStorage.removeItem('name');
      return;
    }

    const contact = { id: nanoid(), name, number };

    dispatch(addContactToStore(contact));
    //contact in actions in slice - is payload
    localStorage.removeItem('name');
    localStorage.removeItem('number');

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.labelTitle}>Name</span>

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.labelTitle}>Number</span>

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={css.button} type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
