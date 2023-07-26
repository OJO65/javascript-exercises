// removeFromArray.js

function removeFromArray(array, ...itemsToRemove) {
    return array.filter(item => !itemsToRemove.includes(item));
  }


// Do not edit below this line
module.exports = removeFromArray;
