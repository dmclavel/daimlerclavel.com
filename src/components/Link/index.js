import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, title, style }) => (
  <a
    href={url}
    style={{
      textDecoration: 'none',
      fontSize: '0.92rem',
      width: 'fit-content',
      ...style,
    }}
    target='_blank'
    rel='noopener noreferrer'
    className='inline text-blue dark:text-mint mb-2'
  >
    {title}
  </a>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  style: PropTypes.object,
};

Link.defaultProps = {
  title: 'Link',
  style: {},
};

export default Link;
