import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GeneralContext from '../../../context/general';

function KeyCombination({ ...rest }) {
  const { showIconText } = useContext(GeneralContext);
  let message = 'Not familiar with these icons?';

  if (showIconText) message = 'Display icons instead?';

  return (
    <div {...rest} className="flex items-center font-sans">
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
  rest: PropTypes.object,
};

KeyCombination.defaultProps = {
  rest: {},
};

export default KeyCombination;
