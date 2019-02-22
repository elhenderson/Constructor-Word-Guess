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
      // let this.displayWord = "";
        // function loopThis() {
          this.displayWord = ""
          for (let i=0;i<letterArray.length;i++) {
            let characterToAdd = letterArray[i].returnUnderlyingCharacterOrPlaceholder();
            // console.log(characterToAdd);
            this.displayWord += appendThis.concat(characterToAdd, " ");
          }
      this.noSpacesToTestWord = this.displayWord.replace(/\s/g, "")
      console.log(this.displayWord);
      
    }
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.takeCharacterAndCallGuessFunction = function(characterGuess) {
      for (let i=0;i<letterArray.length;i++) {
        letterArray[i].updateBoolean(characterGuess);
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