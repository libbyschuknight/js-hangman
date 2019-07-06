// Using node and the terminal
// https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/

// Get process.stdin as the standard input object.
// var standard_input = process.stdin;

// // Set input character encoding.
// standard_input.setEncoding('utf-8');

// // Prompt user to input data in console.
// console.log('Please input text in command line.');

// // When user input data and click enter key.
// standard_input.on('data', function(data) {
//   // User input exit.
//   if (data === 'exit\n') {
//     // Program exit.
//     console.log('User input complete, program exit.');
//     process.exit();
//   } else {
//     // Print user input in console.
//     console.log('User Input Data : ' + data);
//   }
// });

// https://flaviocopes.com/node-input-from-cli/
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

// https://nodejs.org/api/readline.html
// https://node.readthedocs.io/en/latest/api/readline/
// https://github.com/dacogemini/hangman_node_version/blob/master/index.js

// https://www.npmjs.com/package/prompts
// https://github.com/sanquinluis/week11-hangman/tree/master/node_modules
// https://github.com/StefanieDing/Week11-Hangman

// const prompts = require('prompts');

// (async () => {
//   const response = await prompts({
//     type: 'text',
//     name: 'guess',
//     message: 'Make a guess'
//   });

//   if (response['guess'] === 'a') {
//     console.log('That was a corrent guess!!');
//   } else {
//     console.log('Sorry that was wrong, you lose a life :(');
//   }

//   // console.log(response); // => { value: 24 }
// })();

const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
  }
];

(async () => {
  const response = await prompts(questions);

  // => response => { username, age, about }
})();
