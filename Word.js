let Letter = require("./Letter.js")

class Word {
  constructor(tempWordToGuess, noSpacesToTestWord, displayWord, stringRepresentingTheWord, takeCharacterAndCallGuessFunction) {
    // An array of new Letter objects representing the letters of the underlying word
    let letterArray = [];
    this.wordToGuess = tempWordToGuess.split("");
      for (let i=0; i<this.wordToGuess.length; i++) {
        let letter = new Letter(this.wordToGuess[i])
        letterArray.push(letter);
      }
    this.displayWord = "";
    this.noSpacesToTestWord = "";
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.stringRepresentingTheWord = function() {
      let appendThis = "";
          this.displayWord = `\n \n`
          for (let i=0;i<letterArray.length;i++) {
            let characterToAdd = letterArray[i].returnUnderlyingCharacterOrPlaceholder();
            this.displayWord += appendThis.concat(characterToAdd, " ");
          }
      this.noSpacesToTestWord = this.displayWord.replace(/\s/g, "")
      console.log("\x1b[37m", this.displayWord);
      
    }
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.takeCharacterAndCallGuessFunction = function(characterGuess) {
      let correctOrIncorrect = [];
      for (let i=0;i<letterArray.length;i++) {
        letterArray[i].updateBoolean(characterGuess);
        correctOrIncorrect.push(letterArray[i].updateBoolean(characterGuess))
      }
      if (correctOrIncorrect.includes(true)) {
        console.log("\x1b[32m", `\nCorrect!`);
      } else {
        console.log("\x1b[31m", `\nIncorrect!`);
      }


    }
  }
}

module.exports = Word;








































// class Word {
//   constructor(tempGuess, tempWordToGuess, wordArray, underscoreArray, createArray, displayGame, haveGuessed) {
//     this.guess = tempGuess;
//     this.wordToGuess = tempWordToGuess
//     this.wordArray = this.wordToGuess.split("");
//     this.underscoreArray = [];
//     this.haveGuessed = [];
//     //An array of new Letter objects representing the letters of the underlying word
//     this.createArray = function() {

//       console.log(this.wordArray);
//       for (let i=0; i<this.wordArray.length;i++) {
//         let letter = new Letter(this.wordArray[i]);
//         this.wordArray.splice(i, 1, letter);
//         if (this.guess === letter.currentLetter || this.haveGuessed.indexOf(letter.currentLetter) !== -1) {
//           this.underscoreArray.splice(i, 1, letter.currentLetter)
//           // this.haveGuessed.push(letter.currentLetter);
//         } else {
//           this.underscoreArray.splice(i, 1, letter.displayUnderscore)
//         }
        
//         console.log(this.haveGuessed);
//       } 
//       console.log(this.wordArray);
//       this.displayGame = this.underscoreArray.join(" ");
//     }
//   }
// }





//A function that returns a string representing the word. This should call the fucntion on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together

//A functions taht takes a character as an arguement and calls the guess function on each letter object (the second function defined in Letter.js)