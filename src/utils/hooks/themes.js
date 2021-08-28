import { useState, useEffect } from 'react';
import useResizeObserver from './observers';

const useThemes = () => {
  const [theme, setTheme] = useState('');
  const [windowWidth, windowHeight] = useResizeObserver('window');

  const toggleThemeState = () => {
    setTheme((prevState) => {
      if (prevState === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    });
  };

  useEffect(() => {
    const localStrgTheme = window.localStorage.getItem('global-theme');

    if (localStrgTheme === null) {
      setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
      return;
    }

    if (localStrgTheme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    try {
      if (theme === 'dark') {
        window.localStorage.setItem('global-theme', 'dark');
        document.querySelector('html').classList.add('dark');
      } else {
        window.localStorage.setItem('global-theme', 'light');
        document.querySelector('html').classList.remove('dark');
      }
    } catch (_e) {}
  }, [theme, windowWidth, windowHeight]);

  return [theme, toggleThemeState];
};

export default useThemes;
