var readlineSync = require("readline-sync");

var user = readlineSync.question("What's your name? ");
console.log("Welcome "+ user + " to Do You Know Vibhav?");

var score = 0;

var questions = [{
  question: "Where do I live? ",
  answer: "Goa"
}, {
  question: "My favorite place would be (in India)? ",
  answer: "Banglore"
},
{
  question: "Which programmng language do I like? ",
  answer: "Javascript"
}];

let highScores = [
  {
    name: "Vibhav",
    score: 3,
  },
]

function ask(q, answer) {
  var ans = readlineSync.question(q);

  if (ans.toUpperCase() === answer.toUpperCase()) { 
    console.log("Correct\n");
    score = score + 1;
    
  } else {
    console.log("Wrong\n");
   
  }
  console.log("Your current score is: ", score);
  console.log("\n\n")
}

for (let i=0; i<questions.length; i++) {
  var q = questions[i];
  ask(q.question, q.answer)
}

console.log("Your Final score is: ", score);
console.log("\n**********High Scorers are:********** \n")

for (let i=0; i<highScores.length; i++) {
  console.log(`${highScores[i].name} : ${highScores[i].score}.`)
}