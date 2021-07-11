import React from 'react';

import useScrollAnimate from '../utils/hooks/scrollAnimation';
import useThemes from '../utils/hooks/themes';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = () => {
  useScrollAnimate();
  const [theme, toggleThemeState] = useThemes();

  return (
    <>
      <SEO />
      <div className="fixed transition ease-linear duration-300 top-0 w-full h-full bg-transparent dark:bg-royal -z-1" />
      <div id="main-block" className="m-8 md:m-14 lg:m-20 font-serif">
        <NavigationBar theme={theme} toggleThemeState={toggleThemeState} />
        <div className="lg:mx-8 xl:mx-44 2xl:mx-60">
          <HeroSection />
          <Timeline theme={theme} />
          <Projects />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
