import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Button({ type, disabled, title, children, onClick, classes, visible }) {
  return visible ? (
    <button
      className={`${styles.appButton} ${classes}`}
      type={type}
      disabled={disabled}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  ) : null;
}

Button.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  visible: PropTypes.bool
};

export default Button;
