import React from 'react';
import { string, shape } from 'prop-types';

import styles from './styles.scss';

function Input({ label, input, type, meta, placeholder, id }) {
  const calculateErrorClass = () => (meta.error && meta.touched ? styles.inputError : '');
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
        className={`${styles.formInput} ${calculateErrorClass()}`}
        type={type}
      />
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={styles.inputErrorMessage}>{meta.error}</div>}
    </div>
  );
}

Input.propTypes = {
  label: string.isRequired,
  input: shape({}).isRequired,
  type: string.isRequired,
  meta: shape({}).isRequired,
  placeholder: string,
  id: string
};

export default Input;
