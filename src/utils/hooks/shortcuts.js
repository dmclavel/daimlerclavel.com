import { useState, useEffect, useCallback } from 'react';

const useKeyboardShortcuts = () => {
  const [keyCombinationStr, setKeyCombinationStr] = useState('unrecognized');
  const [combinationObject, setCombinationObject] = useState({
    a: false,
    c: false,
    x: false,
  });

  const handleKeydownEvent = useCallback(
    (event) => {
      if (combinationObject[event.key] !== undefined) {
        setCombinationObject((prevObjState) => ({
          ...prevObjState,
          [event.key]: true,
        }));
      }
    },
    [combinationObject],
  );

  useEffect(() => {
    setCombinationObject({
      a: false,
      c: false,
      x: false,
    });
  }, [keyCombinationStr]);

  useEffect(() => {
    /*
     * List of valid combinations
     * A + C = Show text of svg technology icons (e.g. React.js)
     * A + X = Show the image of svg technology icons (e.g. ⚛️)
     */
    if (combinationObject.a && combinationObject.c) {
      setKeyCombinationStr('show-icon-text');
    } else if (combinationObject.a && combinationObject.x) {
      setKeyCombinationStr('show-icon-svg');
    } else {
      setKeyCombinationStr('unrecognized');
    }
  }, [combinationObject]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydownEvent);

    return () => {
      // Clean up event listener on unmount
      document.removeEventListener('keydown', handleKeydownEvent);
    };
  }, [handleKeydownEvent]);

  return keyCombinationStr;
};

export default useKeyboardShortcuts;
