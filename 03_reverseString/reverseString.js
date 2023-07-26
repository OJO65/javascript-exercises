const reverseString = function(str) {
  // Handle blank strings
  if (str.trim().length === 0) {
    return str;
  }

  // Split the string into words
  const words = str.split(/\s+/);

  // Reverse each word and join back with spaces
  const reversedWords = words.map(word => {
    const isWordWithPunctuation = /\W/.test(word);
    if (isWordWithPunctuation) {
      // For words with punctuation, reverse only the word characters
      const wordCharacters = word.match(/[a-zA-Z0-9]/g);
      if (wordCharacters) {
        return wordCharacters.reverse().join('') + word.replace(/[a-zA-Z0-9]/g, '');
      }
    }
    return word.split('').reverse().join('');
  });

  return reversedWords.join(' ');
};


// Do not edit below this line
module.exports = reverseString;
