import { useState, useEffect } from 'react';

const useFocusEvents = (querySelectorString) => {
  const [isElementFocused, setIsElementFocused] = useState(false);

  const onElementFocus = () => {
    setIsElementFocused(true);
  };

  const onElementFocusOut = () => {
    setIsElementFocused(false);
  };

  useEffect(() => {
    const element = document.querySelector(querySelectorString);
    
    if (element !== null) {
      element.addEventListener('focus', onElementFocus);
      element.addEventListener('focusout', onElementFocusOut);
    }
    

    // Clean ups, remove event listeners on unmount
    return () => {
      if (element !== null) {
        element.removeEventListener('focus', onElementFocus);
        element.removeEventListener('focusout', onElementFocusOut);
      }
    };
  }, [querySelectorString]);

  return isElementFocused;
};

export default useFocusEvents;