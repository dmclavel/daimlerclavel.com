import { useEffect } from 'react';

const useScrollAnimate = () => {
  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', (e) => {
      const { clientHeight, scrollTop } = e.target.scrollingElement;
      const EXTRA_MARGIN = 80;
      const tlBlockEl = document.getElementById('timeline-heading-block');
      const spBlockEl = document.getElementById('side-projects');
      const chBlockEl = document.getElementById('contact-heading-block');
      const accBlockEl = document.getElementById('accounts-block');
      const tlBlockRect = tlBlockEl.getBoundingClientRect();
      const spBlockRect = spBlockEl.getBoundingClientRect();
      const chBlockRect = chBlockEl.getBoundingClientRect();
      const accBlockRect = accBlockEl.getBoundingClientRect();

      const timelineBoxElements =
        document.querySelectorAll('section[id*=timeline-box]') || [];
      const projectBoxElements =
        document.querySelectorAll('section[id*=project-box]') || [];

      // scroll positon >= element position
      if (
        scrollTop + clientHeight >=
        tlBlockRect.top + scrollTop + tlBlockRect.height + EXTRA_MARGIN
      ) {
        tlBlockEl.classList.add('animate-up-delay-1');
      }

      if (scrollTop + clientHeight >= spBlockRect.top + scrollTop + spBlockRect.height) {
        spBlockEl.classList.add('animate-up-delay-1');
      }

      Array.from(timelineBoxElements).forEach((tlBoxEl) => {
        const tlBoxRect = tlBoxEl.getBoundingClientRect();
        if (
          scrollTop + clientHeight >=
          tlBoxRect.top + scrollTop + tlBoxRect.height - EXTRA_MARGIN
        ) {
          tlBoxEl.classList.add('animate-up-delay-1');
        }
      });

      Array.from(projectBoxElements).forEach((projBoxEl) => {
        const projBoxRect = projBoxEl.getBoundingClientRect();
        if (
          scrollTop + clientHeight >=
          projBoxRect.top + scrollTop + projBoxRect.height
        ) {
          projBoxEl.classList.add('animate-up-delay-1');
        }
      });

      if (scrollTop + clientHeight >= chBlockRect.top + scrollTop + chBlockRect.height) {
        chBlockEl.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        accBlockRect.top + scrollTop + accBlockRect.height
      ) {
        accBlockEl.classList.add('start-animate');
      }
    });

    return () => document.removeEventListener('scroll', scrollListener);
  }, []);
};

export default useScrollAnimate;
