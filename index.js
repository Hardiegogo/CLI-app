var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.cyan("Here is a small quiz about me. Let's check how well do you know me?"));
var userName = readlineSync.question('May I have your name? ');
console.log("Hello " + chalk.red(userName) + ", let's start with the quiz")

var userScore = 0;

var leaderboard = [
  {
    person: "Chirag",
    score: 5
  },
  {
    person: "Anshika",
    score: 4
  }
]


var questionList = [
  {
    question: "Where do i live? ",
    answer: "Delhi",
  },
  {
    question: "My favourite hobby is? (dancing,reading,Anime) ",
    answer: "Dancing"
  },
  {
    question: "In which university, do i study? ",
    answer: "DTU"
  },
  {
    question: "What's my age? ",
    answer: "20"
  },
  {
    question:"My favourite anime is (Tokyo ghoul, Death note, Naruto) ? ",
    answer:"Tokyo Ghoul"
  }
]

function play (question,answer){
   var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    userScore += 1;
    console.log(chalk.green("right!"))
  } else {
    console.log(chalk.red("wrong!"))
  }
  console.log(chalk.yellow("--------"))
}

questionList.forEach((data) => {
 play(data.question,data.answer);
})

console.log(chalk.green("Yay your score is ") + userScore +", ping me if you want to be in the leaderboards.");

// var newLeaderboard = [...leaderboard, { person: userName, score: userScore }]

// newLeaderboard.sort((a, b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0))

console.log("Leaderboards : ")

leaderboard.forEach((data, index) => {
  let line = index + 1 + ' ' + data.person + "  " + data.score;
  console.log(line);

})
