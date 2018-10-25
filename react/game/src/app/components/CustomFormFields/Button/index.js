import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Button({ type, disabled, title, children, onClick, classNames, visible }) {
  return (
    visible && (
      <button
        className={`${styles.appButton} ${classNames || ''}`}
        type={type}
        disabled={disabled}
        title={title}
        onClick={onClick}
      >
        {children}
      </button>
    )
  );
}

Button.propTypes = {
  title: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  visible: PropTypes.bool
};

export default Button;
