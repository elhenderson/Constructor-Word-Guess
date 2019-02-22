let Word = require("./Word.js");
let inquirer = require('inquirer');

let randomWordArray = ["React Native", "Vue", "Angular", "Redux"]

let guessCounter = 10;

function startGame() {
  let randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  // let testWord = randomWord.split("").join(" ");
  let word = new Word(randomWord);
  word.stringRepresentingTheWord()

    //Resets the game if true
    function tryAgain() {
      inquirer.prompt([
        {
          type: "confirm",
          name: "tryAgain",
          message: "Do you want to play again?"
        }
      ]).then(function(answers) {
        if (answers.tryAgain) {
          guessCounter = 10;
          startGame()
        }
      })
    }

    //Allows user to keep guessing
    function loopThis() {
      inquirer.prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a letter",  
          validate: function(input) {
            if (!input.match(/[a-z]/) || input.length !== 1) {
              console.log(`\nEnter one lowercase letter\n`)
              return false
            } else {
              return true
            }
          }
        }
      ]).then(function(answers) {  
        word.takeCharacterAndCallGuessFunction(answers.guess);
        word.stringRepresentingTheWord();
        if (randomWord.replace(/\s/g, "") === word.noSpacesToTestWord) {
          console.log(`\nYou won!\n`);
          tryAgain();
          return
        }
        if (guessCounter === 0) {
          console.log(`\nYou're out of guesses!\nGame Over!\n`)
          tryAgain();
        } else {
          console.log(`\nYou have ${guessCounter} guesses left!\n`)  
        }
        guessCounter--;
        if (guessCounter >= 0) {
          loopThis();
        }
      })
    }
    loopThis();
}
startGame();
