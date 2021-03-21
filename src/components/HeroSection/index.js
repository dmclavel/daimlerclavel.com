import React from 'react';

const HeroSection = () => {
    const handleClick = () => {
        document.getElementById('contact-heading-block').scrollIntoView();
    };

    return (
        <div className="flex flex-col py-16 lg:py-28 xl:py-36 2xl:py-44 2xl:mx-44">
            <p style={{ animationDelay: '1300ms' }} className="tracking-wider font-semibold opacity-0 mb-2 lg:mb-0 text-blue dark:text-mint-light animate-up">
                Hi there! I am
            </p>
            <p style={{ animationDelay: '1400ms' }} className="tracking-wider font-bold opacity-0 name-highlight text-black-semi dark:text-white-emphasis animate-up">
                Daimler Clavel.
            </p>
            <p style={{ animationDelay: '1500ms' }} className="mb-4 opacity-0 description-dim text-black-disabled dark:text-white-disabled animate-up">
                I love coding web-related stuff.
            </p>
            <p style={{ animationDelay: '1600ms' }} className="opacity-0 text-base text-black dark:text-white-emphasis lg:text-lg animate-up">
                Front-end Web Developer
            </p>
            <p style={{ animationDelay: '1600ms' }} className="opacity-0 text-base text-black dark:text-white-emphasis lg:text-lg animate-up">
                Data Analyst
            </p>
            <p style={{ animationDelay: '1600ms' }} className="opacity-0 text-base text-black dark:text-white-emphasis lg:text-lg animate-up">
                CRO Practitioner
            </p>
            <div style={{ width: 'fit-content', animationDelay: '1700ms' }} className="inline-block relative mt-10 opacity-0 animate-up cursor-pointer">
                {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
                <p onKeyPress={() => {}} onClick={handleClick} className="transition ease-linear duration-300 text-blue dark:text-mint-light dark:hover:text-mint-dark text-lg">
                    Contact Me
                </p>
                <div style={{ animationDelay: '2000ms' }} className="absolute -bottom-1 left-0 h-0.5 bg-blue dark:bg-mint-light animate-block-width-interpolate" />
            </div>
        </div>
    );
};

export default HeroSection;