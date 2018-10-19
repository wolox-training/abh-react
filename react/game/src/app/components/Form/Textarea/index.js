import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Textarea({ label, input, meta, rows, cols, placeholder, id }) {
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
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
  meta: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string
};

export default Textarea;
