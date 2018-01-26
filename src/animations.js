import {domFun} from './dom';
import {createKeyFrames} from './functions';

import {scaleInSettings} from './animation/scale_in';
import {dropInSettings} from './animation/drop_in';
import {drawInSettings} from './animation/draw_in';

const setHeadStyles = (styles) => {
  const styleSvyte = document.querySelector('#svyte-style');

  domFun.addInnerHTML(styleSvyte, styles);
};

const createAnimationStyles = (animationType) => {
  const animClass = '';
  let styles = '';

  switch (animationType) {
    case 'scale':
      styles = 
        scaleInSettings.scaleInitialStyles +
        scaleInSettings.scaleEndStyles +
        scaleInSettings.scaleInKeyFrames;

      setHeadStyles(styles);
    break;

    case 'drop':
      styles = 
        dropInSettings.scaleInitialStyles +
        dropInSettings.scaleEndStyles +
        dropInSettings.scaleInKeyFrames;

     setHeadStyles(styles);
    break;

    case 'draw':
    styles = 
      drawInSettings.scaleInitialStyles +
      drawInSettings.scaleEndStyles +
      drawInSettings.scaleInKeyFrames;

   setHeadStyles(styles);
  break;
  }
};

const animate = (letter, animationType) => {
  switch (animationType) {
    case 'scale':
      domFun.addClass(letter, 'svyte-letter__scale-in');
    break;

    case 'drop':
      domFun.addClass(letter, 'svyte-letter__drop-in');
    break;

    case 'draw':
      domFun.addClass(letter, 'svyte-letter__draw-in');
    break;
  }
};

const animFun = {
  createAnimationStyles,
  animate
};

export {animFun};