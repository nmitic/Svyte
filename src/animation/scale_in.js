import {createKeyFrames} from './../functions';

const scaleInitialStyles = `
  .svyte-letter {
    transform-origin: center;
    transform: scale(0);
  }
`;

const scaleEndStyles = `
  .svyte-letter__scale-in {
    animation-name: svyte-letter__scale-in;
    animation-duration: 300ms;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
`;

const scaleInKeyFrames = createKeyFrames({

  0: ['transform: scale(0)'],
  80: ['transform: scale(1.2)'],
  100: ['transform: scale(1)']

}, 'svyte-letter__scale-in');

const scaleInSettings = {
  scaleInitialStyles,
  scaleEndStyles,
  scaleInKeyFrames
};

export {scaleInSettings};