const getTheTitles = function(books) {
  return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
console.log(getTheTitles([
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' }
]))
