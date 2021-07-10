import { useState, useEffect } from 'react';
import useResizeObserver from './observers';

const useMediaQuery = (mediaQueryStr) => {
  const [mediaMatch, setMediaMatch] = useState({});
  const [windowWidth, windowHeight] = useResizeObserver('window');

  useEffect(() => {
    setMediaMatch(window.matchMedia(mediaQueryStr));
  }, [mediaQueryStr, windowHeight, windowWidth]);

  return mediaMatch;
};

export default useMediaQuery;