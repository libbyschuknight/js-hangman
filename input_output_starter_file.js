'use strict'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

var readline = require('readline');

var terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.setPrompt('Get input: ');
terminal.prompt();

terminal.on('line', function(answer) {
  console.log('Get an answer', answer);

  terminal.prompt();
  // process.exit(0); // this will make the program exit
  // you can also use crtl + c to exit the program
});

terminal.on('close', function() {
  console.log('close');
  process.exit(1);
});
