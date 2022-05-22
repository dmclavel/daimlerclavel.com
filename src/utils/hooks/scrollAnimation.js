import { useEffect } from 'react';

const useScrollAnimate = () => {
  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', function (e) {
      const { clientHeight, scrollTop } = e.target.scrollingElement;
      const extraMargin = 80;
      const tlBlockEl = document.getElementById('timeline-heading-block');
      const spBlockEl = document.getElementById('side-projects');
      const box1El = document.getElementById('timeline-box-1');
      const box2El = document.getElementById('timeline-box-2');
      const box3El = document.getElementById('timeline-box-3');
      const box4El = document.getElementById('timeline-box-4');
      const box5El = document.getElementById('timeline-box-5');
      const box6El = document.getElementById('timeline-box-6');
      const box7El = document.getElementById('timeline-box-7');
      const projBox1El = document.getElementById('project-box-1');
      const chBlockEl = document.getElementById('contact-heading-block');
      const accBlockEl = document.getElementById('accounts-block');
      const tlBlockRect = tlBlockEl.getBoundingClientRect();
      const spBlockRect = spBlockEl.getBoundingClientRect();
      const box1Rect = box1El.getBoundingClientRect();
      const box2Rect = box2El.getBoundingClientRect();
      const box3Rect = box3El.getBoundingClientRect();
      const box4Rect = box4El.getBoundingClientRect();
      const box5Rect = box5El.getBoundingClientRect();
      const box6Rect = box6El.getBoundingClientRect();
      const box7Rect = box7El.getBoundingClientRect();
      const projBox1Rect = projBox1El.getBoundingClientRect();
      const chBlockRect = chBlockEl.getBoundingClientRect();
      const accBlockRect = accBlockEl.getBoundingClientRect();

      // scroll positon >= element position
      if (
        scrollTop + clientHeight >=
        tlBlockRect.top + scrollTop + tlBlockRect.height + extraMargin
      ) {
        tlBlockEl.classList.add('animate-up-delay-1');
      }

      if (scrollTop + clientHeight >= spBlockRect.top + scrollTop + spBlockRect.height) {
        spBlockEl.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box1Rect.top + scrollTop + box1Rect.height - extraMargin
      ) {
        box1El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box2Rect.top + scrollTop + box2Rect.height - extraMargin
      ) {
        box2El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box3Rect.top + scrollTop + box3Rect.height - extraMargin
      ) {
        box3El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box4Rect.top + scrollTop + box4Rect.height - extraMargin
      ) {
        box4El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box5Rect.top + scrollTop + box5Rect.height - extraMargin
      ) {
        box5El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box6Rect.top + scrollTop + box6Rect.height - extraMargin
      ) {
        box6El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        box7Rect.top + scrollTop + box7Rect.height - extraMargin
      ) {
        box7El.classList.add('animate-up-delay-1');
      }

      if (
        scrollTop + clientHeight >=
        projBox1Rect.top + scrollTop + projBox1Rect.height
      ) {
        projBox1El.classList.add('animate-up-delay-1');
      }

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
