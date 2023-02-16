import React from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <>
      <div className={css.container}>
        <h2>Phonebook</h2>
        <ContactForm></ContactForm>
        <Filter />
        <h2>Contacts:</h2>
        <ContactList />
      </div>
    </>
  );
};

export default App;
