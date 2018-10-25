import React from 'react';
import PropTypes from 'prop-types';
import inputPropTypes from '@types/Input';

import styles from '../styles.scss';

function Input({ label, input, type, meta, placeholder, id }) {
  return (
    <div className={styles.formField}>
      {label && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...input}
        id={id}
        placeholder={placeholder}
        className={`${styles.formInput} ${meta.error && meta.touched ? styles.inputError : ''}`}
        type={type}
      />
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={styles.inputErrorMessage}>{meta.error}</div>}
    </div>
  );
}

Input.propTypes = {
  ...inputPropTypes,
  type: PropTypes.string.isRequired
};

export default Input;
