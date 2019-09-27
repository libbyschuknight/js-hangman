// const regex = /^\w{1}$/gm;
// const str = `ab`;
// let m;

// while ((m = regex.exec(str)) !== null) {
//   // This is necessary to avoid infinite loops with zero-width matches
//   if (m.index === regex.lastIndex) {
//     regex.lastIndex++;
//   }

//   // The result can be accessed through the `m`-variable.
//   m.forEach((match, groupIndex) => {
//     console.log(`Found match, group ${groupIndex}: ${match}`);
//   });
// }

// async function f3() {
//   var y = await 20;
//   console.log(y); // 20
// }

// f3();

// const prompts = require('prompts');

// async function user_input() {
//   // var y = await 20;
//   // console.log(y); // 20
//   const response = await prompts({
//     type: 'text',
//     name: 'answer', // name of key  response['guess']
//     message: 'Ask your question here...' // what the user sees in the console
//   });
//   return response.guess;
// }

// var input = user_input();

// console.log(input);

// const prompts = require('prompts');

// async function userInput() {
//   const response = await prompts({
//     type: 'text',
//     name: 'answer', // name of key  response['guess']
//     message: 'Ask your question here...' // what the user sees in the console
//   });

//   // The input gets returned in the response const
//   console.log('Response', response);

//   // Which can also be accessed by
//   console.log(response.answer);
// }

// var ui = userInput();

// console.log(ui);
