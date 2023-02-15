import React from 'react';
import PropTypes from 'prop-types';

import navigateFakeLink from '../../utils/links/navigate';

function TimelineBox({
  boxId,
  position,
  fakeLink,
  content,
  jobTitle,
  headerLink,
  date,
  svgComponent,
  footer,
}) {
  const timelineBox = (
    <div className="flex flex-col bg-gray-100 dark:bg-blue-dark p-4 w-full lg:w-5/12 rounded-sm shadow">
      <div className="flex justify-center">{svgComponent}</div>
      <h2 className="text-center text-base text-black-semi dark:text-white tracking-wider mb-2">
        {date}
      </h2>
      {jobTitle && (
        <h2 className="text-base text-green-dark dark:text-mint-light tracking-wider">
          {jobTitle}
        </h2>
      )}
      {headerLink}
      <span className="font-sans text-sm text-black dark:text-white-semi tracking-wide">
        {content}
      </span>
      {footer}
    </div>
  );
  const middleLine = (
    <div className="relative hidden justify-center items-center lg:flex w-2/12">
      <hr className="bg-gray-300 dark:bg-white-emphasis w-1 h-full" />
      <div className="absolute rounded-full w-4 h-4 bg-green dark:bg-mint-light" />
    </div>
  );
  const emptyItem = <div className="hidden lg:flex w-full lg:w-5/12" />;

  return (
    <section
      id={boxId}
      role="link"
      tabIndex={0}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          const idSplit = boxId.split('-');
          const idxNum = Number(idSplit[idSplit.length - 1]) + 1;
          navigateFakeLink(fakeLink || `#timeline-box-${idxNum}`, 'focus');
        }
      }}
      className="flex mb-4 lg:mb-0 opacity-0"
    >
      {position === 'left' ? timelineBox : emptyItem}
      {middleLine}
      {position === 'right' ? timelineBox : emptyItem}
    </section>
  );
}

TimelineBox.propTypes = {
  boxId: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  fakeLink: PropTypes.string,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  jobTitle: PropTypes.string,
  svgComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  headerLink: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
};

TimelineBox.defaultProps = {
  fakeLink: '',
  svgComponent: null,
  headerLink: null,
  footer: null,
  jobTitle: null,
};

export default TimelineBox;
