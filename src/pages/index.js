import React, { useState, useEffect, useMemo } from 'react';
import useThemes from '../utils/hooks/themes';
import useKeyboardShortcuts from '../utils/hooks/shortcuts';
import useScrollAnimate from '../utils/hooks/scrollAnimation';
import GeneralContext from '../context/general';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SearchEngineOp from '../components/SEO';

const Home = () => {
  const [showIconText, setShowIconText] = useState(false);

  useScrollAnimate();
  const keyboardCombination = useKeyboardShortcuts();
  const [theme, toggleThemeState] = useThemes();

  const contextValue = {
    theme,
    showIconText,
    toggleThemeState,
    keyboardCombination,
  };

  useEffect(() => {
    if (keyboardCombination === 'show-icon-text') {
      setShowIconText(true);
    } else if (keyboardCombination === 'show-icon-svg') {
      setShowIconText(false);
    }
  }, [keyboardCombination]);

  /*
  * Memoize child components below
  *   > This guarantees that these components do not
  *   > get re-rendered when the value of the context provider changes.
  */
  const heroSectionCmp = useMemo(() => <HeroSection />, []);
  const projectsCmp = useMemo(() => <Projects />, []);
  const contactsCmp = useMemo(() => <ContactSection />, []);

  return (
    <GeneralContext.Provider value={contextValue}>
      <SearchEngineOp />
      <div className="fixed transition ease-linear duration-300 top-0 w-full h-full bg-transparent dark:bg-royal -z-1" />
      <div id="main-block" className="m-8 md:m-14 lg:m-20 font-serif">
        <NavigationBar />
        <div className="lg:mx-8 xl:mx-44 2xl:mx-60">
          {heroSectionCmp} 
          <Timeline />
          {projectsCmp}
          {contactsCmp}
          <Footer />
        </div>
      </div>
    </GeneralContext.Provider>
  );
};

export default Home;
