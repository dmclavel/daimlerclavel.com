import React from 'react';
import PropTypes from 'prop-types';

import TechSVG from '../TechSVG';

function TechStack({ stack, techTerminology }) {
  return (
    <section className="font-sans flex flex-wrap items-center mt-2">
      <h1 className="dark:text-white-emphasis mr-2">{techTerminology}:</h1>
      {stack.map((stackObj, stackIdx) => (
        <TechSVG
          key={`svg-${stackObj.name}`}
          stackName={stackObj.name}
          title={stackObj.title}
          isLast={stackIdx === stack.length - 1}
        />
      ))}
    </section>
  );
}

TechStack.propTypes = {
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  techTerminology: PropTypes.string,
};

TechStack.defaultProps = {
  techTerminology: 'Technologies',
};

export default TechStack;
