import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CoolLogo from '../CoolLogo';
import SunSvg from '../../svgs/sun.svg';
import MoonSvg from '../../svgs/moon.svg';

const NavigationBar = ({ theme, toggleThemeState }) => {
    const isBreakpoint =  (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 1024;
    const [menuOpened, setMenuOpened] = useState(false);
    const [burgerMenuClass, setBurgerMenuClass] = useState('flex lg:hidden w-1/2 justify-end items-center start-slide-right opacity-0');

    useEffect(() => {
        if (menuOpened) {
            const mainBlockEl = document.getElementById('main-block');
            const burgerMenuEl = document.getElementById('outer-burger-menu');

            if (mainBlockEl && burgerMenuEl) {
                const style = mainBlockEl.currentStyle || window.getComputedStyle(mainBlockEl);
                burgerMenuEl.style.right = style.margin || '32px';
            }
            setBurgerMenuClass(prev => [prev, 'fixed', 'z-20'].join(' '));
        } else {
            setBurgerMenuClass('flex lg:hidden w-1/2 justify-end items-center start-slide-right opacity-0');
        }
    }, [menuOpened]);

    const handleBurgerMenuClick = () => {
        const bgmenuOpenEl = document.getElementById('burger-menu-open');
        const menuSliderEl = document.getElementById('menu-slider');

        setMenuOpened(prev => !prev);

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
    };

    const navLinksCmp = (inMenu = false) => {
        let linkClass = 'flex flex-col start-slide-right opacity-0';

        if (inMenu) {
            linkClass = [linkClass, 'items-center', 'mt-4'].join(' ');
        } else {
            linkClass = [linkClass, 'mr-8'].join(' ');
        }

        return (
            <Fragment>
                <div style={{ animationDelay: '200ms' }} className={linkClass}>
                    <span className={'text-blue dark:text-mint-light font-bold'}> 01. </span>
                    <a href="#side-projects" className="text-blue-light dark:text-mint font-medium">
                        Projects
                    </a>
                </div>
                <div style={{ animationDelay: '400ms' }} className={linkClass}>
                    <span className={'text-blue dark:text-mint-light font-bold'}> 02. </span>
                    <a href="#timeline" className="text-blue-light dark:text-mint font-medium">
                        Dev Timeline
                    </a>
                </div>
                <div style={{ animationDelay: '600ms' }} className={linkClass}>
                    <span className={'text-blue dark:text-mint-light font-bold'}> 03. </span>
                    <a href="#contact-me" className="text-blue-light dark:text-mint font-medium">
                        Contact
                    </a>
                </div>
                <div style={{ animationDelay: '800ms' }} className={linkClass}>
                    <span className={'text-blue dark:text-mint-light font-bold'}> 04. </span>
                    <a href="#side-projects" className="text-blue-light dark:text-mint font-medium">
                        Resume
                    </a>
                </div>
            </Fragment>
        );
    };

    const darkThemeSliderCmp = (
        <Fragment>
            <SunSvg alt="light" id="sun-light" className="mr-2 w-7 h-7" />
            <div
                id="dark-mode-slider"
                role="switch"
                aria-checked={theme === 'dark'}
                tabIndex={0}
                onClick={toggleThemeState}
                onKeyPress={() => {}}
                className="relative flex items-center rounded-2xl bg-blue-light dark:bg-mint-light w-16 h-8 cursor-pointer"
            >
                <div 
                    id="dark-mode-circle"
                    className="absolute ml-0.5 w-7 h-7 bg-white-emphasis rounded-full" 
                />
            </div>
            <MoonSvg alt="dark" id="moon-dark" className="ml-2 w-6 h-6" />
        </Fragment>
    );

    return (
        <div id="navigation-bar" className="flex items-center font-serif">
            <div className="flex w-1/2 lg:w-1/4 start-slide-right opacity-0">
                <CoolLogo />
            </div>
            <div className="hidden lg:flex lg:w-2/4 justify-center items-center">
                {navLinksCmp()}
            </div>
            <div id="outer-burger-menu" className={burgerMenuClass}>
                <div 
                    role="menu" 
                    className="cursor-pointer"
                    tabIndex={0}
                    onKeyPress={() => {}}
                    onClick={handleBurgerMenuClick}
                >
                    <div id="burger-menu-open" className="transition ease-linear duration-300">
                        <div className="bg-blue dark:bg-mint w-10 h-0.5 rounded-sm bml-1" />
                        <div className="flex justify-end w-10 my-2.5">
                            <div className="bg-blue dark:bg-mint w-8 h-0.5 rounded-sm bml-2" />
                        </div>
                        <div className="flex justify-end w-10">
                            <div className="bg-blue dark:bg-mint w-6 h-0.5 rounded-sm bml-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ animationDelay: '1000ms' }} className="hidden lg:flex w-1/2 lg:w-1/4 justify-end items-center start-slide-right opacity-0">
                {!isBreakpoint && darkThemeSliderCmp}
            </div>
            {menuOpened && (
                <div
                    role="none"
                    onKeyPress={() => {}}
                    onClick={handleBurgerMenuClick}
                    style={{ backdropFilter: 'blur(2px)', width: '25vw', zIndex: 1 }} 
                    className="ease-linear duration-150 delay-150 fixed top-0 left-0 h-full" 
                />
            )}
            <div id="menu-slider" className="flex lg:hidden flex-col justify-center items-center ease-in-out duration-300 delay-150 fixed w-0 h-screen right-0 top-0 bg-gray-100 dark:bg-blue-dark opacity-0 -z-1">
                {isBreakpoint && (
                    <div className="flex items-center">
                        {darkThemeSliderCmp}
                    </div>
                )}
                {navLinksCmp(true)}
            </div>
        </div>
    )
};

NavigationBar.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleThemeState: PropTypes.func.isRequired,
};

export default NavigationBar;