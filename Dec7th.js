/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  const newStr = '';
  return str
    .split('')
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()))
    .join('');
}

console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'));