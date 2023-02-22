import React from 'react';
import Button from '../Common/Button';
import useMediaQuery from '../../utils/hooks/mediaQuery';

import navigateFakeLink from '../../utils/links/navigate';

function HeroSection() {
  const isBreakpoint = useMediaQuery('(max-width: 1024px)');
  const handleClick = () => {
    navigateFakeLink('#contact-heading-block');
  };

  return (
    <section
      role="link"
      tabIndex={0}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          navigateFakeLink('#timeline-box-1', 'focus');
        }
      }}
      className="flex flex-col py-16 lg:py-28 xl:py-36 2xl:py-44 2xl:mx-44"
    >
      <p
        style={{ animationDelay: isBreakpoint.matches ? '400ms' : '1300ms' }}
        className="tracking-wider font-semibold opacity-0 mb-2 lg:mb-0 text-green dark:text-mint-light animate-up"
      >
        Hi there! I am
      </p>
      <h1
        style={{ animationDelay: isBreakpoint.matches ? '500ms' : '1400ms' }}
        className="tracking-wider font-bold opacity-0 name-highlight text-black-semi dark:text-white-emphasis animate-up"
      >
        Daimler Clavel.
      </h1>
      <h2
        style={{ animationDelay: isBreakpoint.matches ? '600ms' : '1500ms' }}
        className="mb-4 opacity-0 description-dim text-black-semi dark:text-white-disabled animate-up"
      >
        I love coding web-related stuff.
      </h2>
      <h3
        style={{ animationDelay: isBreakpoint.matches ? '700ms' : '1600ms' }}
        className="opacity-0 text-base text-black dark:text-white-emphasis lg:text-lg animate-up"
      >
        Front-end Engineer
      </h3>
      <h3
        style={{ animationDelay: isBreakpoint.matches ? '800ms' : '1600ms' }}
        className="opacity-0 text-base text-black dark:text-white-emphasis lg:text-lg animate-up"
      >
        Data Analyst
      </h3>
      <h3
        style={{ animationDelay: isBreakpoint.matches ? '900ms' : '1600ms' }}
        className="opacity-0 text-base text-black dark:text-white-emphasis lg:text-lg animate-up"
      >
        CRO Practitioner
      </h3>
      <div
        style={{
          width: 'fit-content',
          animationDelay: isBreakpoint.matches ? '1000ms' : '1700ms',
        }}
        className="inline-block relative mt-10 opacity-0 animate-up cursor-pointer"
      >
        <Button
          id="hero_contact-me-btn"
          onClick={handleClick}
          className="transition ease-linear duration-300 text-green dark:text-mint-light dark:hover:text-mint-dark text-lg"
        >
          Contact Me
        </Button>
        <div
          style={{ animationDelay: isBreakpoint.matches ? '1300ms' : '2000ms' }}
          className="absolute -bottom-1 left-0 h-0.5 bg-green dark:bg-mint-light animate-block-width-interpolate"
        />
      </div>
    </section>
  );
}

export default HeroSection;
