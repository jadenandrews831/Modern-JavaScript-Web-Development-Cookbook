const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexWithoutE = /\b[a-df-z]+\b/ig;

console.log(aliceExcerpt.match(regexWithoutE));


const imageDescription = 'This image has a resolution of 1440x900 pixels.'
const regexpSize = /([0-9]+)x([0-9]+)/;

const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);

console.log("First and last character match");

const regexpFLMatch = new RegExp(/([ab]).*\1|^[ab]$/);
const ex = 'abbababbbabababbabababbaba';

console.log(1, ex.match(regexpFLMatch));