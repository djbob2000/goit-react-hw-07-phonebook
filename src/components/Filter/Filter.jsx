import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsToStore } from 'redux/contacts/contacts.slice';
import { getFilter } from 'redux/contacts/contacts.selector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleOnChange = event => {
    dispatch(filterContactsToStore(event.target.value));
  };

  return (
    <div className={css.findForm}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <span className={css.labelTitle}>Name</span>
        <input
          type="text"
          onChange={event => handleOnChange(event)}
          value={filter}
          name="filter"
          placeholder="type name here"
        />
      </label>
    </div>
  );
};

export default Filter;
