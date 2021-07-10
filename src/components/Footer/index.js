import React from 'react';

import GetCorrectSvg from '../../utils/hoc/GetCorrectSvg';

const Footer = () => {
  return (
    <div role="contentinfo" className="flex flex-col items-center mt-36">
      <span className="text-base md:text-lg xl:text-xl dark:text-white-emphasis tracking-widest">
        Built With
      </span>
      <div className="flex mt-2">
        <GetCorrectSvg
          stackName="gatsby"
          overrideClass="w-6 h-6 lg:w-8 lg:h-8 mr-2 lg:mr-3"
        />
        <GetCorrectSvg stackName="tailwind" overrideClass="w-6 h-6 lg:w-8 lg:h-8" />
      </div>
      <span className="text-base dark:text-white tracking-wider mt-6">
        <span className="text-blue dark:text-mint-light">Daimler Clavel</span> &#169; 2021
      </span>
    </div>
  );
};

export default Footer;
