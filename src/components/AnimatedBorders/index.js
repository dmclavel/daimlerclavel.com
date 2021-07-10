import React from 'react';

const AnimatedBorders = ({ hovered }) => {
  let topBorderClass = 'absolute top-0 right-0 w-full h-1 bg-blue dark:bg-mint-dark';
  let leftBorderClass =
    'absolute top-0 left-0 transform rotate-90 origin-top-left w-full h-1 bg-blue dark:bg-mint-dark';
  let bottomBorderClass = 'absolute bottom-0 left-0 w-full h-1 bg-blue dark:bg-mint-dark';
  let rightBorderClass =
    'absolute bottom-0 right-0 transform -rotate-270 origin-bottom-right w-full h-1 bg-blue dark:bg-mint-dark';

  if (hovered) {
    topBorderClass = [topBorderClass, 'animate-block-width-interpolate'].join(' ');
    leftBorderClass = [leftBorderClass, 'animate-block-width-interpolate'].join(' ');
    bottomBorderClass = [bottomBorderClass, 'animate-block-width-interpolate'].join(' ');
    rightBorderClass = [rightBorderClass, 'animate-block-width-interpolate'].join(' ');
  }

  return (
    <>
      <div className={topBorderClass} />
      <div className={leftBorderClass} />
      <div className={bottomBorderClass} />
      <div className={rightBorderClass} />
      {/* <div className="fixed top-0 right-0 h-2.5 bg-gradient-to-r from-purple-400 dark:from-mint to-purple-600 dark:to-mint-dark animate-block-width-interpolate" />
            <div className="fixed top-0 left-2.5 h-2.5 transform rotate-90 origin-top-left bg-gradient-to-l from-purple-600 dark:from-mint-dark to-purple-400 dark:to-mint animate-block-height-interpolate-delay" />
            <div className="fixed bottom-0 left-0 h-2.5 bg-gradient-to-l from-purple-400 dark:from-mint to-purple-600 dark:to-mint-dark animate-block-width-interpolate" />
            <div className="fixed bottom-0 right-2.5 h-2.5 transform -rotate-270 origin-bottom-right bg-gradient-to-l from-purple-400 dark:from-mint to-purple-600 dark:to-mint-dark animate-block-height-interpolate-delay" /> */}
    </>
  );
};

export default AnimatedBorders;
