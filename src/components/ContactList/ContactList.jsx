import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsFromStore } from '../../redux/contacts/contacts.thunk';

import ContactItem from '../ContactItem/ContactItem';
import Loader from '../Loader/Loader';
import { selectFilteredContacts, selectIsLoading } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  // const filteredContactsHandler = () => {
  //   return contacts.filter(item =>
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  useEffect(() => {
    dispatch(getContactsFromStore());
  }, [dispatch]);

  // const filteredContacts = useMemo(
  //   () =>
  //     contacts.filter(item =>
  //       item.name.toLowerCase().includes(filter.toLowerCase())
  //     ),
  //   [contacts, filter]
  // );

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default ContactList;
