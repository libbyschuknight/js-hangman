'use strict'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// https://www.npmjs.com/package/prompts
const prompts = require('prompts');

function newline() {
  console.log('\n');
}

const welcomeMessage = `
=== Welcome to Hangman ===

To start playing just follow the prompts.

To exit the game before the end press Control + c

Let's get started!`;

console.log(welcomeMessage);

const word = 'misty';
const wordArray = word.split('');

const maskedWord = wordArray.map(x => '_');

// array to collect guesses
const guesses = [];

// collect correct guesses

// create a loop of making guess
// collecting guess
// checking if guess is correct
//  if is add to correct guesses
//  unmask that letter in the maskedWord

(async () => {
  // while maskedword != word
  // keeping asking for guesses

  while (maskedWord.join('') !== wordArray.join('')) {
    newline();
    console.log('The word: ', maskedWord.join(' '));
    newline();

    // console.log('masked word', maskedWord.join(''));
    // console.log('word', wordArray.join(''));
    // console.log(maskedWord.join('') === wordArray.join(''));

    const response = await prompts({
      type: 'text',
      name: 'guess', // name of key  response['guess']
      message: 'Make a guess:' // what the user sees in the console
    });
    newline();

    // if user wants to quit out of the game
    // ctrl + c or ctrl + d will == undefined, this will break out of the loop
    if (response.guess == undefined) {
      break;
    }

    var guess;

    // one letter guesses
    if (response.guess.length === 1) {
      var guess = response.guess;
    } else {
      console.log('You must only enter one letter, try again.');
      // how to get input again??
      // wrap the const repsonse prompts in a function so can call when ever I like??
    }

    //   store it and contoinue
    // else
    //   ask again

    // guess is either in the word, not in the word
    // already guessed

    console.log('Guess just entered: ', guess);
    newline();

    newline();
    guesses.push(guess);
    console.log('Guesses you have made: ', guesses.join());
  }
})();

// submit one letter guesses
// - guess is either in the word - unmasked
// - not in the word - sorry that was wrong
// - already guessed
// for ^^ this need to store the guesses, and have game loop
