import React from 'react';
import PropTypes from 'prop-types';

function Link({ href, title, style }) {
  return (
    <a
      href={href}
      style={{
        textDecoration: 'none',
        fontSize: '0.92rem',
        width: 'fit-content',
        ...style,
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="inline text-green dark:text-mint mb-2"
    >
      {title}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  style: PropTypes.shape({}),
};

Link.defaultProps = {
  title: 'Link',
  style: {},
};

export default Link;
