'use strict'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

var readline = require('readline');

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

var terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('The word: ', maskedWord.join(' '));
terminal.setPrompt('Guess a letter: ');
terminal.prompt();

terminal.on('line', function(guess) {
  // this is the game loop or guess loop
  console.log('The word: ', maskedWord.join(' '));

  console.log(word.includes(guess));

  if (guess.length !== 1) {
    console.log('You can only enter one letter, try again');
    terminal.prompt();
  } else if (word.includes(guess)) {
    // submit one letter guesses
    // - guess is either in the word - unmasked
    // if guess is in letter
    console.log('That is correct');

    //    tell user that guess is in letter
    //    save guess in guesses
    //    correct_guesses = check what letters are in word to get correct guesss
    //     incorrect_guesses = is guesses minus correct_guesses

    // - not in the word - sorry that was wrong
    // - already guessed
    // for ^^ this need to store the guesses, and have game loop

    console.log(guess);
    // store guesses
    console.log('guesses', guesses);
    console.log('word', word);
    console.log('masked word', maskedWord);

    terminal.prompt();
  } else {
    console.log('Sorry, that is not in the word, guess again.');

    terminal.prompt();
  }
});
