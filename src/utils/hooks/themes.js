import { useState, useLayoutEffect } from 'react';

const useThemes = () => {
  const [theme, setTheme] = useState('');

  const setThemeLayout = (newTheme) => {
    if (newTheme === 'light') {
      window.localStorage.setItem('global-theme', 'light');
      document.querySelector('html').classList.remove('dark');
    } else {
      window.localStorage.setItem('global-theme', 'dark');
      document.querySelector('html').classList.add('dark');
    }
  };

  const toggleThemeState = () => {
    setTheme((prevState) => {
      if (prevState === 'light') {
        setThemeLayout('dark');
        return 'dark';
      }
      setThemeLayout('light');
      return 'light';
    });
  };

  useLayoutEffect(() => {
    const localStrgTheme = window.localStorage.getItem('global-theme');

    if (!localStrgTheme) {
      const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(
        isDarkThemePreferred ? 'dark' : 'light',
      );
      if (isDarkThemePreferred) {
        setThemeLayout('dark');
      } else {
        setThemeLayout('light');
      }
      return;
    }

    if (localStrgTheme === 'light') {
      setTheme('light');
      setThemeLayout('light');
    } else {
      setThemeLayout('dark');
      setTheme('dark');
    }
  }, []);

  return [theme, toggleThemeState];
};

export default useThemes;
