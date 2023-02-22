import React from 'react';
import PropTypes from 'prop-types';
import { useGeneralContext } from '../../../context/general';

function KeyCombination({ style }) {
  const { showIconText } = useGeneralContext();
  let message = 'Not familiar with these icons?';

  if (showIconText) message = 'Display icons instead?';

  return (
    <div style={style} className="flex items-center font-sans">
      <span className="text-sm dark:text-white-emphasis key-combination-text">
        <span className="underline">{message}</span>
        <span> Press</span>
        <span className="ml-1 rounded-sm px-2 py-0.5 bg-gray-300 dark:bg-royal-light">
          A
        </span>
        <span className="ml-1 rounded-sm px-2 py-0.5 bg-gray-300 dark:bg-royal-light">
          {showIconText ? 'X' : 'C'}
        </span>
      </span>
    </div>
  );
}

KeyCombination.propTypes = {
  style: PropTypes.shape({}),
};

KeyCombination.defaultProps = {
  style: {},
};

export default KeyCombination;
