/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import BUTTON_TYPES from './constants';

function Button({
  type,
  onClick,
  children,
  id,
  className,
}) {
  const identifiers = {};
  if (id.trim().length) identifiers.id = id;
  if (className.trim().length) identifiers.className = className;
  return (
    <button
      type={type}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}
      {...identifiers}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(BUTTON_TYPES),
  onClick: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  id: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  children: null,
  id: '',
  className: '',
};

export default Button;
