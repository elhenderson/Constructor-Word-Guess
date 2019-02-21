let Word = require("./Word.js");
let inquirer = require('inquirer');

let randomWordArray = ["Angular", "React",  "Redux", "Vue", "Electron"]

let guessCounter = 10;

function startGame() {
  let word = new Word(randomWordArray[Math.floor(Math.random() * randomWordArray.length)]);
  word.stringRepresentingTheWord();
  function anotherGuess() {
    inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess a letter",  
      }
    ]).then(function(answers) {    
      word.takeCharacterAndCallGuessFunction(answers.guess);
      word.stringRepresentingTheWord();
    })
  }
  if (guessCounter > 0) {
    anotherGuess()
  }
}
startGame();
// word.stringRepresentingTheWord();

// var word = new Word("","JavaScript");
// word.createArray();

// inquirer.prompt([
//   {
//     type: "input",
//     name: "guess",
//     message: "Guess a letter",
//     validate: function(guess) {
//       word.guess = guess;
//       word.haveGuessed.push(guess);
//       // for (i=0;i<word.wordArray.length;i++) {
//       //   if (guess === word.wordArray[i].currentLetter) {
//       //     console.log(`\nwow!`)
//       //   } else {
//       //     console.log(`\nWrong!`)
//       //   }
//       // }
//       word.createArray();
//       console.log(word.displayGame);
//       // console.log(word.wordArray);
//     }
//   }
// ])