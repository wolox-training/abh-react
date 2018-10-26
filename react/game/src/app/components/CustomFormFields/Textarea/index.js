import React from 'react';
import PropTypes from 'prop-types';
import inputPropTypes from '@types/Input';

import styles from '../styles.scss';

function Textarea({ label, input, meta, rows, resize, cols, placeholder, id }) {
  return (
    <div className={styles.formField}>
      {label && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        {...input}
        id={id}
        rows={rows}
        cols={cols}
        style={{ resize: !resize && 'none' }}
        placeholder={placeholder}
        className={`${styles.formInput} ${meta.error && meta.touched ? styles.inputError : ''}`}
      />
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={styles.inputErrorMessage}>{meta.error}</div>}
    </div>
  );
}

Textarea.propTypes = {
  ...inputPropTypes,
  rows: PropTypes.number,
  cols: PropTypes.number
};

export default Textarea;
