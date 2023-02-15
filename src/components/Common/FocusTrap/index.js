import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { getFocusableElements } from './utils';

function FocusTrap({
  children,
  open,
}) {
  const focusTrapRef = useRef();

  useEffect(() => {
    if (open) {
      const childElements = Array.from(focusTrapRef.current.children);
      const focusableElements = getFocusableElements(childElements);

      const createFocusHandler = ([prevElement, nextElement]) => (event) => {
        if (event.shiftKey && event.key === 'Tab') {
          if (prevElement && 'focus' in prevElement) {
            event.preventDefault();
            prevElement.focus();
          }
        } else if (!event.shiftKey && event.key === 'Tab') {
          if (nextElement && 'focus' in nextElement) {
            event.preventDefault();
            nextElement.focus();
          }
        }
      };
      if (focusableElements[0] && 'focus' in focusableElements[0]) {
        // Automatically focuses first focusable element
        focusableElements[0].focus();
      }
      focusableElements.forEach((focusEl, index) => {
        if (focusEl && 'addEventListener' in focusEl) {
          let prevFocusEl = focusableElements[index - 1];
          let nextFocusEl = focusableElements[index + 1];
          const isLast = index + 1 === focusableElements.length;
          const isFirst = index === 0;
          if (isFirst) {
            prevFocusEl = focusableElements[focusableElements.length - 1];
          }
          if (isLast) {
            [nextFocusEl] = focusableElements;
          }
          focusEl.addEventListener('keydown', createFocusHandler([prevFocusEl, nextFocusEl]));
        }
      });
    }
  }, [open]);

  return (
    <div ref={focusTrapRef}>
      {children}
    </div>
  );
}

FocusTrap.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
};

FocusTrap.defaultProps = {
  open: false,
};

export default FocusTrap;
