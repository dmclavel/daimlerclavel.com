import React from 'react';
import PropTypes from 'prop-types';

const TimelineBox = ({
  boxId,
  position,
  content,
  jobTitle,
  headerLink,
  date,
  svgComponent,
  footer,
}) => {
  const timelineBox = (
    <div className='flex flex-col bg-gray-100 dark:bg-blue-dark p-4 w-full lg:w-5/12 rounded-sm shadow'>
      <div className='flex justify-center'>{svgComponent}</div>
      <span className='text-center text-base text-black-semi dark:text-white tracking-wider mb-2'>
        {date}
      </span>
      {jobTitle && (
        <span className='text-base text-blue dark:text-mint-light tracking-wider'>
          {jobTitle}
        </span>
      )}
      {headerLink}
      <span className='font-sans text-sm text-black dark:text-white-semi tracking-wide'>
        {content}
      </span>
      {footer}
    </div>
  );
  const middleLine = (
    <div className='relative hidden justify-center items-center lg:flex w-2/12'>
      <hr className='bg-gray-300 dark:bg-white-emphasis w-1 h-full' />
      <div className='absolute rounded-full w-4 h-4 bg-blue dark:bg-mint-light' />
    </div>
  );
  const emptyItem = <div className='hidden lg:flex w-full lg:w-5/12' />;

  return (
    <>
      <div id={boxId} className='flex mb-4 lg:mb-0 opacity-0'>
        {position === 'left' ? timelineBox : emptyItem}
        {middleLine}
        {position === 'right' ? timelineBox : emptyItem}
      </div>
    </>
  );
};

TimelineBox.propTypes = {
  boxId: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  jobTitle: PropTypes.string,
  svgComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  headerLink: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
};

TimelineBox.defaultProps = {
  svgComponent: null,
  headerLink: null,
  footer: null,
  jobTitle: null,
};

export default TimelineBox;
