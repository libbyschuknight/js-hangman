# Hangman

To start a game run `node hangman.js`.

To quit out of the game `ctrl + c`

Using <https://nodejs.org/api/readline.html> for input and output after finding this number guessing game online - <https://gist.github.com/peterjacobson/305184d71fa347ea5b95> (Thanks Pete!)

## Starter File

The original aim of attempting to create a hangman game with JavaScript in the terminal, was to provide a way for people to know how to give prompts and receive input with JS.

This was from having seen graduates who only knew JavaScript, being given a task to do in the terminal (as this is easy to do with languages like Ruby) and having to write something that outputs to the terminal and receives input from the terminal. And these grads really struggling. I didn't think this gave this people a fair chance, they were already on the backfoot.

So, I started trying to write my own hangman game in JS. I first started with this node package - <https://www.npmjs.com/package/prompts>. This is a nice way to ask questions and get the input. But I got stuck. I am yet to understand how `async` and `awaits` work.

I then did another search on line and found this number guessing game - <https://gist.github.com/peterjacobson/305184d71fa347ea5b95>, which has set up a simple way to show output and receieve input. Yay!

With all of that in mind I have also created `input_outut_starter_file.js` with the basics input/output functionality so others can get started with writing their own game or terminal program/script.

## Some requirements

- Write a hangman game (try writing some components test-first with ??)
- Apply OO principles?? Or best / better principles for JS
- code reviews - get someone to review?

User stories:

- [x] As a hangman player, I would like to be able to start a new game of hangman

  - `node hangman.js`
  - ? can you make the file run like you can with Ruby does, and just have `hangman`? Scripting?

- [x] As a hangman player, I would like to see some indication of how many letters there are in the word that I am supposed to guess

- [ ] As a hangman player, I want to submit one letter guesses and be told whether my guess is either in the word, not in the word, or already guessed

- [ ] As a hangman player, I want the game to handle bad input (like numbers, symbols, and letters I've previously guessed) gracefully and with an appropriate error message so that I am not punished unduly for mistakes

- [ ] As a hangman player, I want to see the letters I've guessed correctly revealed on the hidden word that I am trying to guess so that I can guess the word more readily

- [ ] As a hangman player, I want to see the letters I've guessed incorrectly so that I don't guess the same wrong letter again

- [ ] As a hangman player, I would like to see how many lives are remaining

- [ ] As a hangman player, I must have 1 life deducted every time I make an incorrect guess of a letter that I have not already guessed

- [ ] As a hangman player, I want the game to end when I have run out of lives

- [ ] As a hangman player, I want the game to end when I have guessed the full word
