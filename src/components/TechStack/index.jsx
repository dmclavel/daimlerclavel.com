import React from 'react';
import PropTypes from 'prop-types';

import TechSVG from '../TechSVG';

function TechStack({ stack, techTerminology }) {
  return (
    <div className="font-sans flex flex-wrap items-center mt-2">
      <span className="dark:text-white-emphasis mr-2">
        {techTerminology}
        :
      </span>
      {stack.map((stackObj) => (
        <TechSVG
          key={`svg-${stackObj.name}`}
          stackName={stackObj.name}
          title={stackObj.title}
        />
      ))}
    </div>
  );
}

TechStack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  techTerminology: PropTypes.string,
};

TechStack.defaultProps = {
  techTerminology: 'Technologies',
};

export default TechStack;
