let Word = require("./Word.js");
let inquirer = require('inquirer');

let randomWordArray = ["Angular", "React",  "Redux", "Vue", "Electron"]

let guessCounter = 5;

function startGame() {
  let randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  let testWord = randomWord.split("").join(" ");
  console.log(testWord);
  let word = new Word(randomWord);
  let guessingWord = word.stringRepresentingTheWord();
  console.log(guessingWord);
    function loopThis() {
      inquirer.prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a letter",  
        }
      ]).then(function(answers) {  
        if (guessCounter === 0) {
          console.log("You're out of guesses!")
        } else {
          console.log(`\nYou have ${guessCounter} guesses left!`)  
        }
        if (testWord === guessingWord) {
          console.log("You won!")
        }
        word.takeCharacterAndCallGuessFunction(answers.guess);
        word.stringRepresentingTheWord();
        // let compactWord = "some word"
        // let isWordComplete = compactWord.replace(/\s+/g, "");
        // console.log(isWordComplete);
        guessCounter--;
        if (guessCounter >= 0) {
          loopThis();
        }
      })
    }
    loopThis();
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