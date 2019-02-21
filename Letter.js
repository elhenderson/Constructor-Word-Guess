class Letter {
  constructor(tempUnderlyingCharacter, hasBeenGuessedBoolean, returnUnderlyingCharacterOrPlaceholder, updateBoolean) {
    this.underlyingCharacter = tempUnderlyingCharacter,
    this.hasBeenGuessedBoolean = false;
    this.returnUnderlyingCharacterOrPlaceholder = function() {
      if (this.hasBeenGuessedBoolean === true) {
        return this.underlyingCharacter     
      } else {
        return "_"
      }
    }
    this.updateBoolean = function(characterGuess) {
      if (characterGuess === this.underlyingCharacter) {
        this.hasBeenGuessedBoolean = true;
      }
  
    }
  }
  

}




























// class Letter {
//   constructor(tempCurrentLetter, alreadyGuessed, displayUnderscore, guessResult) {
//     //A string value to store the underlying chracter for the letter
//     this.currentLetter = tempCurrentLetter;

//     //A boolean value that stores whether that letter has been guessed
//     this.alreadyGuessed = false;
    
//     this.displayUnderscore = "_";
//   //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//   //A function that takes a character as an arguement and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
//     this.guessResult = function(currentIndex) {
//       if (this.currentLetter === currentIndex) {
//         this.currentLetter = currentIndex;
//         this.alreadyGuessed = true;
//       } else {
//         this.currentLetter = "_";
//         this.alreadyGuessed = false;
//       }
//     }
//   }
// }



// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



// let letter = new Letter("a");
// letter.updateBoolean("a");
// letter.returnUnderlyingCharacterOrPlaceholder();
// console.log(letter.hasBeenGuessedBoolean);


module.exports = Letter;
