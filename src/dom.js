const appendSpace = (spaceAmount, appendTo) => {
  const spacer = createElement('div', 'class', 'svyte-letter');

  setStylesOnElement(spacer, {
    width: spaceAmount,
    height: '1px',
    display: 'inline-block'
  });

  appendLetter(spacer, appendTo);
};

const appendLetter = (letter, appendTo) => {
  appendTo.appendChild(letter);
};

const removeLetter = (letter) => {
  letter.remove();    
};

const addInnerHTML = (element, stuffToAdd) => {
  element.innerHTML += stuffToAdd;
};

const addClass = (element,className) => {
  element.classList.add(className);
};

const setStylesOnElement = (element, styles) => {
  Object.assign(element.style, styles);
};

const setStylesOnElements = (elements, styles) => {
  elements.forEach(element => {
    setStylesOnElement(element, styles);
  });
}

const createElement = (tagName, attrName, attrValue) => {
  const element = document.createElement(tagName);
  element.setAttribute(attrName, attrValue);

  return element;
};

const setSvyteStyles = (styles) => {
  let styleElement = createElement('style', 'id', 'svyte-style');
  let headElement = document.querySelector('head');

  let stuffToAdd = `
      .svyte-letter {
        margin-right: ${styles.leterSpacing};
        margin-bottom: ${styles.lineHeight};
      }
  `;

  addInnerHTML(styleElement, stuffToAdd);
  appendElementTo(styleElement, headElement);  
};

const appendElementTo = (element, targetElement) => {
  targetElement.appendChild(element);
};

const domFun = {
  appendLetter,
  appendSpace,
  removeLetter,
  setSvyteStyles,
  addInnerHTML,
  addClass
};

export {domFun};