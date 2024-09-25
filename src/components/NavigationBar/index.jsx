import React, { useState, useEffect, useMemo } from 'react';
import useMediaQuery from '../../utils/hooks/mediaQuery';
import { useGeneralContext } from '../../context/general';
import Link from '../Common/Link';
import FocusTrap from '../Common/FocusTrap';

import CoolLogo from '../CoolLogo';
import SunSvg from '../../svgs/sun.svg';
import MoonSvg from '../../svgs/moon.svg';

function NavigationBar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState(
    'flex lg:hidden w-1/2 justify-end items-center start-slide-right opacity-0'
  );
  const burgerMenuBreakPoint = useMediaQuery('(max-width: 1024px)');
  const { theme, toggleThemeState } = useGeneralContext();

  useEffect(() => {
    if (menuOpened) {
      const mainBlockEl = document.getElementById('main-block');
      const burgerMenuEl = document.getElementById('outer-burger-menu');

      if (mainBlockEl && burgerMenuEl) {
        const style = mainBlockEl.currentStyle || window.getComputedStyle(mainBlockEl);
        burgerMenuEl.style.right = style.margin || '32px';
      }
      setBurgerMenuClass((prev) => [prev, 'fixed', 'z-20'].join(' '));
    } else {
      setBurgerMenuClass(
        'flex lg:hidden w-1/2 justify-end items-center start-slide-right opacity-0'
      );
    }
  }, [menuOpened]);

  const handleBurgerMenuClick = () => {
    setMenuOpened((prev) => !prev);

    setTimeout(() => {
      const bgmenuOpenEl = document.getElementById('burger-menu-open');
      const menuSliderEl = document.getElementById('menu-slider');

      if (!menuOpened) {
        if (bgmenuOpenEl) {
          bgmenuOpenEl.classList.remove('close');
          bgmenuOpenEl.classList.add('open');
        }
        if (menuSliderEl) {
          menuSliderEl.classList.add('open');
        }
      } else {
        if (bgmenuOpenEl) {
          bgmenuOpenEl.classList.add('close');
        }
        if (menuSliderEl) {
          menuSliderEl.classList.remove('open');
        }
      }
    }, 100);
  };

  const navLinksCmp = (inMenu = false) => {
    let linkClass = 'flex flex-col start-slide-right opacity-0';
    const tabIndexValue = menuOpened || !burgerMenuBreakPoint.matches ? 0 : -1;
    const eventProps = menuOpened ? { onClick: handleBurgerMenuClick } : {};

    if (inMenu) {
      linkClass = [linkClass, 'items-center', 'mt-4'].join(' ');
    } else {
      linkClass = [linkClass, 'mr-8'].join(' ');
    }

    return (
      <>
        <div style={{ animationDelay: '200ms' }} className={linkClass}>
          <span className="text-green-dark dark:text-mint-light font-bold"> 01. </span>
          <Link
            href="#side-projects"
            className="text-green dark:text-mint font-medium main-link"
            accessibility={{
              tabIndex: tabIndexValue,
              'aria-label': 'go to projects section',
            }}
            {...eventProps}
          >
            Projects
          </Link>
        </div>
        <div style={{ animationDelay: '400ms' }} className={linkClass}>
          <span className="text-green-dark dark:text-mint-light font-bold"> 02. </span>
          <Link
            href="#timeline"
            className="text-green dark:text-mint font-medium main-link"
            accessibility={{
              tabIndex: tabIndexValue,
              'aria-label': 'go to dev timeline section',
            }}
            {...eventProps}
          >
            Dev Timeline
          </Link>
        </div>
        <div style={{ animationDelay: '600ms' }} className={linkClass}>
          <span className="text-green-dark dark:text-mint-light font-bold"> 03. </span>
          <Link
            href="#contact-me"
            className="text-green dark:text-mint font-medium main-link"
            accessibility={{
              tabIndex: tabIndexValue,
              'aria-label': 'go to contact section',
            }}
            {...eventProps}
          >
            Contact
          </Link>
        </div>
        <div style={{ animationDelay: '800ms' }} className={linkClass}>
          <span className="text-green-dark dark:text-mint-light font-bold"> 04. </span>
          <Link
            href="https://www.dropbox.com/s/9gkr1kxmmlqpv15/Clavel%20CV%202023%20-%20PDF.pdf?dl=0"
            target="_blank"
            referrerPolicy="no-referrer-when-downgrade"
            className="text-green dark:text-mint font-medium main-link"
            accessibility={{
              tabIndex: tabIndexValue,
              'aria-label': 'view curriculum vitae in a new tab',
            }}
          >
            CV
          </Link>
        </div>
      </>
    );
  };

  const darkThemeSliderCmp = useMemo(
    () => (
      <>
        <SunSvg
          alt=""
          aria-label="light-mode"
          id="sun-light"
          className={`mr-2 w-7 h-7 ${
            theme === 'dark' ? 'svg-sun-dark' : 'svg-sun-light'
          }`}
        />
        <div
          id="dark-mode-slider"
          role="switch"
          aria-label="theme-switcher"
          aria-checked={theme === 'dark'}
          tabIndex={menuOpened || !burgerMenuBreakPoint.matches ? 0 : -1}
          onClick={toggleThemeState}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              toggleThemeState();
            }
          }}
          className="relative flex items-center rounded-2xl bg-green-light dark:bg-mint-light w-16 h-8 cursor-pointer"
        >
          <div
            id="dark-mode-circle"
            className={`
            absolute ml-0.5 w-7 h-7 bg-white-emphasis rounded-full
            ${theme === 'dark' ? 'animate-slider-right' : 'animate-slider-left'}
          `}
          />
        </div>
        <MoonSvg
          alt=""
          aria-label="dark-mode"
          id="moon-dark"
          className={`ml-2 w-6 h-6 ${
            theme === 'dark' ? 'svg-moon-dark' : 'svg-moon-light'
          }`}
        />
      </>
    ),
    [theme, menuOpened, burgerMenuBreakPoint, toggleThemeState]
  );

  const burgerMenuCmp = (
    <div id="outer-burger-menu" className={burgerMenuClass}>
      <span id="burger-menu-description-open" className="opacity-0 absolute -z-1">
        This will open a sidebar with different navigation links to the site.
      </span>
      <span id="burger-menu-description-close" className="opacity-0 absolute -z-1">
        This will close the burger menu.
      </span>
      <div
        aria-describedby={`burger-menu-description-${menuOpened ? 'close' : 'open'}`}
        role="menu"
        className="cursor-pointer"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleBurgerMenuClick();
          }
        }}
        onClick={handleBurgerMenuClick}
      >
        <div id="burger-menu-open" className="transition ease-linear duration-300">
          <div className="bg-green dark:bg-mint w-10 h-0.5 rounded-sm bml-1" />
          <div className="flex justify-end w-10 my-2.5">
            <div className="bg-green dark:bg-mint w-8 h-0.5 rounded-sm bml-2" />
          </div>
          <div className="flex justify-end w-10">
            <div className="bg-green dark:bg-mint w-6 h-0.5 rounded-sm bml-3" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header id="navigation-bar" className="flex items-center font-serif">
      <div className="flex w-1/2 lg:w-1/4 start-slide-right opacity-0">
        <CoolLogo />
      </div>
      <nav className="hidden lg:flex lg:w-2/4 justify-center items-center">
        {navLinksCmp()}
      </nav>
      {!menuOpened && burgerMenuCmp}
      <FocusTrap open={menuOpened}>
        {menuOpened && (
          <>
            {burgerMenuCmp}
            <div
              aria-label="close menu"
              role="button"
              tabIndex={0}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleBurgerMenuClick();
                }
              }}
              onClick={handleBurgerMenuClick}
              style={{ width: '25vw', zIndex: 1 }}
              className="fixed top-0 left-0 h-full backdrop-blur menu-backdrop"
            />
          </>
        )}
        <div
          id="menu-slider"
          className="flex lg:hidden flex-col justify-center items-center ease-in-out duration-300 delay-150 fixed w-0 h-screen right-0 top-0 bg-gray-100 dark:bg-blue-dark opacity-0 -z-1"
        >
          {burgerMenuBreakPoint.matches && (
            <div className="flex items-center">{darkThemeSliderCmp}</div>
          )}
          {navLinksCmp(true)}
        </div>
      </FocusTrap>
      <div
        style={{ animationDelay: '1000ms' }}
        className="hidden lg:flex w-1/2 lg:w-1/4 justify-end items-center start-slide-right opacity-0"
      >
        {!burgerMenuBreakPoint.matches && darkThemeSliderCmp}
      </div>
    </header>
  );
}

export default NavigationBar;
