import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GeneralContext from '../../context/general';

/* Returns the correct SVG component */
const TechSVG = ({ stackName, overrideClass, title }) => {
  const { showIconText } = useContext(GeneralContext);
  let svgClassName = 'w-5 h-5 mr-2';

  if (overrideClass) svgClassName = overrideClass;

  let VectorComponent = null;

  try {
    VectorComponent = require(`../../svgs/${stackName}.svg`);
  } catch (_e) {}

  return (
    <div title={title}>
      {VectorComponent && !showIconText && <VectorComponent className={svgClassName} />}
      {showIconText && (
        <span className="mr-2 text-black dark:text-white-emphasis text-sm">{title},</span>
      )}
    </div>
  );
};

TechSVG.propTypes = {
  stackName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overrideClass: PropTypes.string,
};

TechSVG.defaultProps = {
  overrideClass: '',
};

export default TechSVG;
