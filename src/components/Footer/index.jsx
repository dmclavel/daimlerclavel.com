import React from 'react';

import TechSVG from '../TechSVG';

function Footer() {
  return (
    <footer role="contentinfo">
      <div
        role="link"
        tabIndex={0}
        className="flex flex-col items-center mt-36"
      >
        <h1 className="text-base md:text-lg xl:text-xl dark:text-white-emphasis tracking-widest">
          Built With
        </h1>
        <div className="flex mt-2">
          <TechSVG
            stackName="gatsby"
            title="Gatsby JS"
            overrideClass="w-6 h-6 lg:w-8 lg:h-8 mr-2 lg:mr-3"
          />
          <TechSVG
            stackName="tailwindcss"
            title="Tailwind CSS"
            overrideClass="w-6 h-6 lg:w-8 lg:h-8"
          />
        </div>
        <h2 className="text-base dark:text-white tracking-wider mt-6">
          <span className="text-green dark:text-mint-light">Daimler Clavel</span>
          {' '}
          &#169;
          2023
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
