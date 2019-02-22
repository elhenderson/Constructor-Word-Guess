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

module.exports = Letter;
