const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return personAge > oldestAge ? person : oldest;
  });
  function getAge(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
      yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
  }
};
// Do not edit below this line
module.exports = findTheOldest;
console.log(findTheOldest([
  { name: 'Carly', yearOfBirth: 1942, yearOfDeath: 2020 },
  { name: 'Ray', yearOfBirth: 1965 },
  { name: 'Jane', yearOfBirth: 1970, yearOfDeath: 2015 }
]))