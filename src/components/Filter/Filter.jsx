import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsSliceAction } from '../../redux/filter/filter.slice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleOnChange = event => {
    dispatch(filterContactsSliceAction(event.target.value));
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
