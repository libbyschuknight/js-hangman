// https://www.npmjs.com/package/prompts
const prompts = require('prompts');

function newline() {
  console.log('\n');
}

const welcomeMessage = `
=== Welcome to Hangman ===

To start playing just follow the prompts.

To exit the game before the end press Control + c

Let's get started!
`;

console.log(welcomeMessage);

const word = 'flux';
var wordArray = word.split('');

var maskedWord = wordArray.map(x => '_');
console.log('The word: ', maskedWord.join(' '));
newline();

// array to collect guesses
var guesses = [];

// collect correct guesses

// create a loop of making guess
// collecting guess
// checking if guess is correct
//  if is add to correct guesses
//  unmmask that letter in the maskedWord

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'guess', // name of key  response['guess']
    message: 'Make a guess:' // what the user sees in the console
  });
  newline();

  guess = response.guess;
  console.log('Guess just entered: ', guess);
  newline();

  if (guess === 'a') {
    console.log('That was a corrent guess!!');
  } else {
    console.log('Sorry that was wrong, you lose a life :(');
  }

  newline();
  guesses.push(guess);
  console.log('Guesses you have made: ', guesses.join());
})();
