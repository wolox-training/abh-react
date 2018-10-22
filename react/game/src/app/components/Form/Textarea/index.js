import React from 'react';
import PropTypes from 'prop-types';

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
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }).isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
  meta: PropTypes.shape({ error: PropTypes.string, active: PropTypes.bool, touched: PropTypes.bool })
    .isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string
};

export default Textarea;
