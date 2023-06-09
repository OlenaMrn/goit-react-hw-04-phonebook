import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange, filter }) => {
    return (
      <div className={css.wrap}>
        <label className={css.label} htmlFor="Find">
          Find contact by name{' '}
        </label>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={onChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};