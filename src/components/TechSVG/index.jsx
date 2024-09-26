/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { useGeneralContext } from '../../context/general';

/* Returns the correct SVG component */
function TechSVG({ stackName, overrideClass, title, isLast }) {
  const { showIconText } = useGeneralContext();
  let svgClassName = 'w-5 h-5 mr-2';

  if (overrideClass) svgClassName = overrideClass;

  let VectorComponent = () => null;

  try {
    // eslint-disable-next-line import/no-dynamic-require
    VectorComponent = require(`../../svgs/${stackName}.svg`);
  } catch (e) {
    // Instead of throwing an error that will crash the application, do nothing
  }

  return (
    <div title={title}>
      {VectorComponent && !showIconText && <VectorComponent className={svgClassName} />}
      {showIconText && (
        <p className="mr-2 text-black dark:text-white-emphasis text-sm">
          {title + (isLast ? '' : ',')}
        </p>
      )}
    </div>
  );
}

TechSVG.propTypes = {
  stackName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overrideClass: PropTypes.string,
  isLast: PropTypes.bool.isRequired,
};

TechSVG.defaultProps = {
  overrideClass: '',
};

export default TechSVG;
