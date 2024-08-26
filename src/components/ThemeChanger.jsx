import {useEffect, useState} from 'react';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';

const ThemeChanger = ({setTheme, theme}) => {
  const handleMediaChange = e => {
    setTheme(e.matches ? 'dark' : 'light');
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="themeChanger" onClick={toggleTheme}>
      <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
      <img src={theme === 'dark' ? Sun : Moon} alt="Theme Icon" />
    </div>
  );
};

export default ThemeChanger;
