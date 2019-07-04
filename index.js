// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// www.digitalocean.com/community/tutorials/how-to-write-your-first-javascript-program
//www.secretgeek.net/console_log
// https://www.mikedane.com/web-development/javascript/getting-user-input/

// var person = prompt('Please enter your name');

// console.log(person);

function myFunction() {
  var person = prompt('Please enter your name');
  debugger;
  if (person != null) {
    document.getElementById('demo').innerHTML =
      'Hello ' + person + '! How are you today?';
  }
}

myFunction();
