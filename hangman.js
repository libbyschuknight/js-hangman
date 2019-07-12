// https://www.npmjs.com/package/prompts
const prompts = require('prompts');

const welcomeMessage = `
=== Welcome to Hangman ===

To start playing just follow the prompts.

To exit the game before the end press Control + c

Let's get started!
`;

console.log(welcomeMessage);

const word = 'flux';
var wordArray = word.split('');
// indication of how many letters there are in the word that I am supposed to guess
var maskedWord = wordArray.map(x => '_');
console.log(maskedWord);

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
    message: 'Make a guess' // what the user sees in the console
  });

  console.log(word);

  console.log(guesses);

  console.log(response.guess); // returns "d"

  guesses.push(response.guess);

  response => {
    guess;
    console.log(guess);
  };

  console.log(response);

  if (response.guess === 'a') {
    console.log('That was a corrent guess!!');
  } else {
    console.log('Sorry that was wrong, you lose a life :(');
  }

  console.log(response); // => { value: 24 }
  guess = response.guess;
})();
