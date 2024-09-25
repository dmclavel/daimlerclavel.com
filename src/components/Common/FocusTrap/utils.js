/* eslint-disable import/prefer-default-export */
const getFocusableElements = (childElements) => {
  const focusableElements = [];

  childElements.forEach((childEl) => {
    if (childEl && 'tabIndex' in childEl) {
      if (Number(childEl.tabIndex) >= 0) {
        focusableElements.push(childEl);
      }
    } else if (childEl && 'tagName' in childEl) {
      if (
        childEl.tagName === 'A' &&
        childEl.href.trim().length > 0 &&
        !childEl.disabled
      ) {
        focusableElements.push(childEl);
      }
    }
    if (childEl && 'children' in childEl) {
      const nestedChildElements = Array.from(childEl.children);
      const nestedFocusableElements = getFocusableElements(nestedChildElements);
      nestedFocusableElements.forEach((arrEl) => focusableElements.push(arrEl));
    }
  });

  return focusableElements;
};

export { getFocusableElements };
