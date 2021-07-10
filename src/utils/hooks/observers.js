import { useState, useEffect } from 'react';

const useResizeObserver = (type, elementNode = document.body) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    let windowEventListener;
    let elementResizeObserver;

    switch (type) {
      case 'window': {
        windowEventListener = () => {
          const w = document.documentElement.clientWidth;
          const h = document.documentElement.clientHeight;

          setWidth(w);
          setHeight(h);
        };

        window.addEventListener('resize', windowEventListener);
        break;
      }
      case 'element': {
        elementResizeObserver = new ResizeObserver((entries) => {
          let entryWidth = [];
          let entryHeight = [];
          /* eslint-disable no-restricted-syntax */
          for (const entry of entries) {
            entryWidth = entryWidth.concat(entry.contentRect.width);
            entryHeight = entryHeight.concat(entry.contentRect.height);
          }

          setWidth([...entryWidth]);
          setHeight([...entryHeight]);
        });

        try {
          elementResizeObserver.observe(elementNode);
        } catch (e) {}
        break;
      }
      default:
        break;
    }

    return () => {
      if (windowEventListener)
        window.removeEventListener('resize', windowEventListener);
      if (elementResizeObserver) elementResizeObserver.disconnect();
    };
  }, [type, elementNode]);

  return [width, height];
};

export default useResizeObserver;