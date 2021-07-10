import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ scrollToId, children, style }) => {
  return (
    <a
      href={scrollToId}
      style={style}
      className='font-serif text-base xl:text-xl dark:text-mint tracking-widest'
    >
      {children}
    </a>
  );
};

NavLink.propTypes = {
  scrollToId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.object,
};

NavLink.defaultProps = {
  style: {},
};

export default NavLink;
