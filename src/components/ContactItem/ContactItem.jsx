import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactFromStore } from '../../redux/contacts/contacts.thunk';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactFromStore(id));
  };

  return (
    <li className={css.list__item}>
      <p className={css.item__name}>
        {name}: <span className={css.item__phone}>{phone}</span>
      </p>
      <button className={css.button__delete} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
