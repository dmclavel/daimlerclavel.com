import React from 'react';
import PropTypes from 'prop-types';

import TechSVG from '../TechSVG';

const TechStack = ({ stack, techTerminology }) => {
  return (
    <div className="font-sans flex flex-wrap items-center mt-2">
      <span className="dark:text-white-emphasis mr-2">{techTerminology}:</span>
      {stack.map((stackObj, index) => {
        return (
          <TechSVG
            key={`svg-${index}`}
            stackName={stackObj.name}
            title={stackObj.title}
          />
        );
      })}
    </div>
  );
};

TechStack.propTypes = {
  stack: PropTypes.array.isRequired,
  techTerminology: PropTypes.string,
};

TechStack.defaultProps = {
  techTerminology: 'Technologies',
};

export default TechStack;
