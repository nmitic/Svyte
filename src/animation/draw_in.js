import {createKeyFrames} from './../functions';

const scaleInitialStyles = `
  .svyte-letter path {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    fill: white;
    stroke: black;
  }
`;

const scaleEndStyles = `
  .svyte-letter__draw-in path {
    animation: svyte-letter__draw-in 400ms ease-out forwards,
               svyte-letter__fade-in 300ms ease-out 400ms forwards;
  }
`;

const scaleInKeyFrames = 
  createKeyFrames({
    0: ['stroke-dashoffset: 100'],
    100: ['stroke-dashoffset: 0']
  }, 'svyte-letter__draw-in') +   
  createKeyFrames({
   0: ['fill: white'],
   100: ['fill: black']
  }, 'svyte-letter__fade-in');

const drawInSettings = {
  scaleInitialStyles,
  scaleEndStyles,
  scaleInKeyFrames
};

export {drawInSettings};