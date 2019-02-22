class Letter {
  constructor(tempUnderlyingCharacter, testForUpperCase, hasBeenGuessedBoolean, returnUnderlyingCharacterOrPlaceholder, updateBoolean) {
    this.underlyingCharacter = tempUnderlyingCharacter,
    this.testForUpperCase = tempUnderlyingCharacter.toUpperCase(),
    this.hasBeenGuessedBoolean = false;
    this.returnUnderlyingCharacterOrPlaceholder = function() {
      if (this.hasBeenGuessedBoolean === true) {
        return this.underlyingCharacter     
      } else if (this.underlyingCharacter === " ") {
        return "  "
      } else {
        return "_"
      }
    }
    this.updateBoolean = function(characterGuess) {
      if (characterGuess === this.underlyingCharacter || characterGuess.toUpperCase() === this.testForUpperCase) {
        this.hasBeenGuessedBoolean = true;
        return true;
      } 
    }
  }
  

}

module.exports = Letter;
