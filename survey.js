const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answerArray = [];

rl.question("What's your name?", (answer) => {
  answerArray.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    answerArray.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      answerArray.push(answer);
      rl.question("Which meal is your favourite?", (answer) => {
        answerArray.push(answer);
        rl.question(
          "What's your favourite thing to eat for that meal?",
          (answer) => {
            answerArray.push(answer);
            rl.question("Which sport is your absolute favourite?", (answer) => {
              answerArray.push(answer);
              rl.question("What is your superpower?", (answer) => {
                answerArray.push(answer);

                let profileInfo = `My name is ${answerArray[0]}. My favorite activity is ${answerArray[1]} and I listen to ${answerArray[2]} while doing it. My favorite meal is ${answerArray[3]} and I like to eat ${answerArray[4]}. My favorite sport is ${answerArray[5]}. If I had a super power it would be ${answerArray[6]}.`;

                console.log(profileInfo);

                rl.close();
              });
            });
          }
        );
      });
    });
  });
});
