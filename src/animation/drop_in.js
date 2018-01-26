import {createKeyFrames} from './../functions';

const scaleInitialStyles = `
  .svyte-letter {
    transform-origin: center;
    transform: scale(0);
  }
`;

const scaleEndStyles = `
  .svyte-letter__drop-in {
    animation-name: svyte-letter__drop-in;
    animation-duration: 300ms;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
`;

const scaleInKeyFrames = createKeyFrames({

  0: ['transform: scale(10)'],
  40: ['transform: scale(0.3)'],
  100: ['transform: scale(1)']

}, 'svyte-letter__drop-in');

const dropInSettings = {
  scaleInitialStyles,
  scaleEndStyles,
  scaleInKeyFrames
};

export {dropInSettings};