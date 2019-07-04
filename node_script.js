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
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});

// https://nodejs.org/api/readline.html
