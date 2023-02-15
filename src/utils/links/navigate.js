/**
 * @param {string} selectorStr element identifier
 * @param {string} navigationType dictates navigation type like focus or scroll
 * @returns {void}
 */
export default function navigateFakeLink(selectorStr, navigationType) {
  if (typeof selectorStr === 'string') {
    const element = document.querySelector(selectorStr);
    switch (navigationType) {
      case 'focus': {
        if (element && 'focus' in element) {
          element.focus();
        }
        break;
      }
      default: {
        if (element && 'scrollIntoView' in element) {
          element.scrollIntoView();
        }
        break;
      }
    }
  }
}
