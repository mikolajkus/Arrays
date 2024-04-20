// 1. Use the elements from thingsInHome  array and thingsInGarden  array to create madeOutOfWood array and edibles  array.

const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

// -- edit below --
const madeOutOfWood = [thingsInGarden[1], thingsInGarden[4], thingsInHome[3]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];
// -- edit above --

console.log(
    `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`
);

// 2. Write the getSmallestNumber function.
// write two versions of the above function: one using a for  loop and one using the sort  function.

function getSmallestNumberBySort(arrayOfNumbers) {
    const sortedArray = arrayOfNumbers.sort(
        function(firstNumber, secondNumber) {
            return firstNumber - secondNumber;
        }
    );
    return sortedArray[0];
}

console.log(getSmallestNumberBySort([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumberBySort([200, 25, 4, 123, 87])); // 4

function getSmallestNumberByForLoop(arrayOfNumbers) {
    let smallestNumber = arrayOfNumbers[0];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] < smallestNumber) {
            smallestNumber = arrayOfNumbers[i];
        }
    }
    return smallestNumber;
}

console.log(getSmallestNumberByForLoop([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumberByForLoop([200, 25, 4, 123, 87])); // 4

// 3. Write the getSquaredNumbers function.
// don't modify the array passed as an argument.

function getSquaredNumbers(arrayOfNumbers) {
    return arrayOfNumbers.map(
        function (number) {
            return number ** 2;
        }
    )
}

console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);
console.log(squaredNumbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]

// 4. Write the getReversedString function.

function getReversedString(string) {
    return string.split('').reverse().join('');
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

// 5. Write the isPalindrome function.
// Inside the isPalindrome function, call the getReversedString function.
// It should be case-insensitive and shouldn't take spaces into consideration.

function isPalindrome(string) {
    const replaceCharacters = string.replace(/\s/g, '').toLowerCase();
    const checkStringReverse = getReversedString(replaceCharacters);
    return checkStringReverse === replaceCharacters;
}


console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')); // true
console.log(isPalindrome('Hello!')); // false

// 6. Write the countLetters function.
// It should return an object representing the number of letters in the given text.
// Ignore spaces and make sure your function is case-insensitive.

function countLetters(text) {
    const lettersCount = {};
    const processedText = text.replace(/\s/g, '').toLowerCase();
    for (let i = 0; i < processedText.length; i++) {
        const character = processedText[i];
        if (/[a-z]/.test(character)) {
            if (lettersCount[character]) {
                lettersCount[character]++;
            } else {
                lettersCount[character] = 1;
            }
        }
    }
    return lettersCount;
}

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);

// 7.Write the getAgeDifference function that finds the difference between the youngest and oldest person.
// Inside of the getAgeDifference function call the getYoungestPerson  and getOldestPerson functions that you write yourself.

const peopleArray = [
  {
    name: 'Adam',
    age: 20
  },
  {
    name: 'Amanda',
    age: 5
  },
  {
    name: 'John',
    age: 75
  },
  {
    name: 'Dave',
    age: 15
  }
]

console.log(getAgeDifference(peopleArray)); // 70

function getYoungestPerson(people) {
    const userSortedByAge = people.slice().sort(
        function (firstUser, secondUser) {
            return firstUser.age - secondUser.age;
        }
    )
    return userSortedByAge[0];
}

function getOldestPerson(people) {
    const userSortedByAge = people.slice().sort(
        function (firstUser, secondUser) {
            return firstUser.age - secondUser.age;
        }
    )
    return userSortedByAge[userSortedByAge.length - 1];
}

function getAgeDifference(people) {
    const youngestPerson = getYoungestPerson(people);
    const oldestPerson = getOldestPerson(people);
    return oldestPerson.age - youngestPerson.age;
}

// 8. You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function getPositiveSum(arrayOfNumbers) {
    let sumOfNumbers = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > 0) {
            sumOfNumbers = sumOfNumbers + arrayOfNumbers[i];
        }
    }
    return sumOfNumbers;
}

console.log(getPositiveSum([[1,-4,7,12]]));