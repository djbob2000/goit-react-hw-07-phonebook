import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
// import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/contacts/contacts.selector';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const filteredContactsHandler = () => {
  //   return contacts.filter(item =>
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
