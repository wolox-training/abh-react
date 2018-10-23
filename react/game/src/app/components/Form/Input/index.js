import React from 'react';
import PropTypes from 'prop-types';

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
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }).isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({ error: PropTypes.string, active: PropTypes.bool, touched: PropTypes.bool })
    .isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string
};

export default Input;
