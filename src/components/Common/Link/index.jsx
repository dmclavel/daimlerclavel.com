import React from 'react';
import PropTypes from 'prop-types';

import {
  ANCHOR_REFERRER_POLICY_DEF_IDX,
  ANCHOR_REFERRER_POLICY_VALUES,
  ANCHOR_TARGET_DEF_IDX,
  ANCHOR_TARGET_VALUES,
} from './constants';

function Link({
  href,
  target,
  referrerPolicy,
  className,
  accessibility,
  children,
}) {
  return (
    <a
      href={href}
      target={target}
      referrerPolicy={referrerPolicy}
      className={className}
      {...accessibility}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(ANCHOR_TARGET_VALUES),
  referrerPolicy: PropTypes.oneOf(ANCHOR_REFERRER_POLICY_VALUES),
  className: PropTypes.string,
  accessibility: PropTypes.shape({
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  target: ANCHOR_TARGET_VALUES[ANCHOR_TARGET_DEF_IDX],
  referrerPolicy: ANCHOR_REFERRER_POLICY_VALUES[ANCHOR_REFERRER_POLICY_DEF_IDX],
  className: '',
  accessibility: {},
};

export default Link;
