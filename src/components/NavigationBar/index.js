import React from 'react';
import PropTypes from 'prop-types';

import CoolLogo from '../CoolLogo';
import SunSvg from '../../svgs/sun.svg';
import MoonSvg from '../../svgs/moon.svg';

const NavigationBar = ({ theme, toggleThemeState }) => {
    return (
        <div id="navigation-bar" className="flex items-center font-serif">
            <div className="flex w-1/2 lg:w-1/4 start-slide-right opacity-0">
                <CoolLogo />
            </div>
            <div className="hidden lg:flex lg:w-2/4 justify-center items-center">
                <div style={{ animationDelay: '200ms' }} className="flex flex-col mr-8 start-slide-right opacity-0">
                    <span className="text-blue dark:text-mint-light font-bold"> 01. </span>
                    <a href="#side-projects" className="text-blue-light dark:text-mint font-medium">
                        Projects
                    </a>
                </div>
                <div style={{ animationDelay: '400ms' }} className="flex flex-col mr-8 start-slide-right opacity-0">
                    <span className="text-blue dark:text-mint-light font-bold"> 02. </span>
                    <a href="#timeline" className="text-blue-light dark:text-mint font-medium">
                        Dev Timeline
                    </a>
                </div>
                <div style={{ animationDelay: '600ms' }} className="flex flex-col mr-8 start-slide-right opacity-0">
                    <span className="text-blue dark:text-mint-light font-bold"> 03. </span>
                    <a href="#contact-me" className="text-blue-light dark:text-mint font-medium">
                        Contact
                    </a>
                </div>
                <div style={{ animationDelay: '800ms' }} className="flex flex-col mr-8 start-slide-right opacity-0">
                    <span className="text-blue dark:text-mint-light font-bold"> 04. </span>
                    <a href="#side-projects" className="text-blue-light dark:text-mint font-medium">
                        Resume
                    </a>
                </div>
            </div>
            <div style={{ animationDelay: '1000ms' }} className="flex w-1/2 lg:w-1/4 justify-end items-center start-slide-right opacity-0">
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
            </div>
        </div>
    )
};

NavigationBar.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleThemeState: PropTypes.func.isRequired,
};

export default NavigationBar;