/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import BUTTON_TYPES from './constants';

function Button({
  type,
  onClick,
  children,
  className,
}) {
  return (
    <button
      type={type}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(BUTTON_TYPES),
  onClick: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  children: null,
  className: '',
};

export default Button;
