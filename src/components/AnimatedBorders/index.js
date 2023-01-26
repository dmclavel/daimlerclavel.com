import React from 'react';

const AnimatedBorders = ({ hovered }) => {
  let topBorderClass =
    'absolute top-0 right-0 w-full h-1 bg-green-dark dark:bg-mint-dark';
  let leftBorderClass =
    'absolute top-0 left-0 transform rotate-90 origin-top-left w-full h-1 bg-green-dark dark:bg-mint-dark';
  let bottomBorderClass =
    'absolute bottom-0 left-0 w-full h-1 bg-green-dark dark:bg-mint-dark';
  let rightBorderClass =
    'absolute bottom-0 right-0 transform -rotate-270 origin-bottom-right w-full h-1 bg-green-dark dark:bg-mint-dark';

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
    </>
  );
};

export default AnimatedBorders;
