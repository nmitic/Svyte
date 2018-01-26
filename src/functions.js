const parseLetters = (svgLetters) => {
  let svgLettersCopy = Object.assign({}, svgLetters);

  const enumerableKeys = Object.keys(svgLettersCopy);

  enumerableKeys.forEach((letterKey) => {
      const svg = parseElemFromString(svgLettersCopy[letterKey], "image/svg+xml", 'svg');
      
      const svgViewBox = svg.getAttribute('viewBox');

      const width = svgViewBox.split(' ')[2];
      const height = svgViewBox.split(' ')[3];

      svg.setAttribute('width', width);
      svg.setAttribute('height', height);

      svg.setAttribute('class', 'svyte-letter');

      svgLettersCopy[letterKey] = svg;
      
  });

  return svgLettersCopy;
};

const isValidType = (type, validTypes) => {

  const allValidTypes = Object.keys(validTypes).reduce((prev, next) => prev + validTypes[next], '');

  return allValidTypes.includes(type);
};

const parseElemFromString = (elementString, elementType, elementTagName) =>{
  const parser = new DOMParser();

  const doc = parser.parseFromString(elementString, elementType);
  const element = doc.querySelector(elementTagName);

  return element;
};

// const keyFrameProp = {
//   0: ['color: red', 'background-color: white'],
//   50: ['color: green', 'background-color: black'],
//   100: ['color: blue', 'background-color: white']
// }
const createKeyFrames = (keyFrameProp, keyFrameName) => {
  const props = Object.keys(keyFrameProp).map((percentage) => {

    const percentageProps = keyFrameProp[percentage].map((percentageProp)=>{
      return `${percentageProp};`;
    }).join('');

    return `${percentage}%{${percentageProps}}`;

  }).join('');

  const keyFrameString = `
    @keyframes ${keyFrameName} {
      ${props}
    }
  `
  return keyFrameString;
};

export {parseLetters, isValidType, createKeyFrames};