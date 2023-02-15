/* eslint-disable global-require */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GeneralContext from '../../context/general';

/* Returns the correct SVG component */
function TechSVG({ stackName, overrideClass, title }) {
  const { showIconText } = useContext(GeneralContext);
  let svgClassName = 'w-5 h-5 mr-2';

  if (overrideClass) svgClassName = overrideClass;

  let VectorComponent = null;

  try {
    // eslint-disable-next-line import/no-dynamic-require
    VectorComponent = require(`../../svgs/${stackName}.svg`);
  } catch (e) {
    throw new Error(e);
  }

  return (
    <div title={title}>
      {VectorComponent && !showIconText && <VectorComponent className={svgClassName} />}
      {showIconText && (
        <p className="mr-2 text-black dark:text-white-emphasis text-sm">
          {title}
          ,
        </p>
      )}
    </div>
  );
}

TechSVG.propTypes = {
  stackName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overrideClass: PropTypes.string,
};

TechSVG.defaultProps = {
  overrideClass: '',
};

export default TechSVG;
