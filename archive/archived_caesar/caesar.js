const caesar = function(string, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftAmount = shift % 26;
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();

        if (alphabet.includes(lowerChar)) {
            let newIndex = (alphabet.indexOf(lowerChar) + shiftAmount) % 26;
            let newChar = alphabet[newIndex];

            if (isUpperCase) {
                newChar = newChar.toUpperCase();
            }

            result += newChar;
        } else {
            result += char;
        }
    }

    return result;

};

// Do not edit below this line
module.exports = caesar;
console.log(caesar('Hello, World!', 3));
