import fontDefault from './svg_fonts_chars/default';
import {domFun} from './dom';
import {parseLetters, isValidType} from './functions';
import {animFun} from './animations';

console.log(123123);

const fonts = {
  default: fontDefault
}

const KEYS = {
  space: 32,
  delete: 8
}

const validTypes = {
  capitalizedLetters: `QWERTYUIOPASDFGHJKLZXCVBNM`,
  nonCapitalizedLetters: `qwertyuiopasdfghjklzxcvbnm`,
  specialChars: `!@#$%^&*()_+-=[]{};'\:"|,./<>?~\``,
  numbers: `1234567890`,
  space: ' ',
  backspace: 'Backspace'
};

const defaultSettings = {
  writeTo: document.querySelector('body'),
  text: {
    font: "default",
    spaceWidth: '10px',
    leterSpacing: '2px',
    lineHeight: '12px'
  },
  animation: {
    type: 'drop',
    easing: 'some-easing',
    duration: 123,
  }
};

const initSvyte = (settings = defaultSettings) => {
  const letters = parseLetters(fonts[settings.text.font]);
  const spaceWidth = settings.text.spaceWidth;

  domFun.setSvyteStyles(settings.text);
  animFun.createAnimationStyles(settings.animation.type);
  

  document.addEventListener('keydown', (event) => {
    let letter = event.key;
    const letterCode = event.keyCode;
    const lastAppendedLetter = document.querySelectorAll('.svyte-letter')[document.querySelectorAll('.svyte-letter').length - 1];

    if (!isValidType(letter, validTypes)) {
        return;
    }
  
    switch (letterCode) {
        case KEYS.delete:
          domFun.removeLetter(lastAppendedLetter);
        break;
  
        case KEYS.space:
          domFun.appendSpace(spaceWidth, settings.writeTo);
        break;
  
        default:
            const svgToAppend = letters[letter].cloneNode(true);        
            domFun.appendLetter(svgToAppend, settings.writeTo);

            window.requestAnimationFrame(()=>{
              animFun.animate(svgToAppend, settings.animation.type);
            });
    }
  });
};

export {initSvyte};