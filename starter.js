// https://www.npmjs.com/package/prompts
const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'answer', // name of key  response['guess']
    message: 'Ask your question here...' // what the user sees in the console
  });

  // The input gets returned in the response const
  console.log('Response', response);

  // Which can also be accessed by
  console.log(response.answer);
})();

// === Multiple Questions ===
// const questions = [
//   {
//     type: 'text',
//     name: 'username',
//     message: 'What is your GitHub username?'
//   },
//   {
//     type: 'number',
//     name: 'age',
//     message: 'How old are you?'
//   },
//   {
//     type: 'text',
//     name: 'about',
//     message: 'Tell something about yourself',
//     initial: 'Why should I?'
//   }
// ];

// (async () => {
//   const response = await prompts(questions);

//   response => {
//     username, age, about;
//   };
//   console.log(response);
// })();
