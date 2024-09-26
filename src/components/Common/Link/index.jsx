import React from 'react';
import PropTypes from 'prop-types';

import {
  ANCHOR_REFERRER_POLICY_DEF_IDX,
  ANCHOR_REFERRER_POLICY_VALUES,
  ANCHOR_TARGET_DEF_IDX,
  ANCHOR_TARGET_VALUES,
} from './constants';

function Link({
  id,
  href,
  target,
  referrerPolicy,
  className,
  accessibility,
  onClick,
  children,
}) {
  const identifiers = {};
  if (id.trim().length) identifiers.id = id;
  if (className.trim().length) identifiers.className = className;

  const events = {};
  if (typeof onClick === 'function') events.onClick = onClick;

  return (
    <a
      href={href}
      target={target}
      referrerPolicy={referrerPolicy}
      {...identifiers}
      {...events}
      {...accessibility}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(ANCHOR_TARGET_VALUES),
  referrerPolicy: PropTypes.oneOf(ANCHOR_REFERRER_POLICY_VALUES),
  className: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  accessibility: PropTypes.shape({
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  id: '',
  target: ANCHOR_TARGET_VALUES[ANCHOR_TARGET_DEF_IDX],
  referrerPolicy: ANCHOR_REFERRER_POLICY_VALUES[ANCHOR_REFERRER_POLICY_DEF_IDX],
  className: '',
  onClick: null,
  accessibility: {},
};

export default Link;
