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

console.log(getPositiveSum([1,-4,7,12]));

// 9. Complete the square sum function so that it squares each number passed into it and then sums the results together.//
// For example, for [1, 2, 2] it should return 9.

function getSquareSum(arrayOfNumbers) {
    let squaredSum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const squaredNumber = arrayOfNumbers[i] ** 2;
        squaredSum = squaredSum + squaredNumber;
    }
    return squaredSum;
}

console.log(getSquareSum([1, 2, 2]));

// 10. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function getInitials(name) {
    const splitName = name.split(' ');
    let initials = splitName[0].substring(0, 1).toUpperCase();
    if (splitName.length > 1) {
        initials += '.' + splitName[splitName.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

// Example usage
console.log(getInitials("Sam Harris")); // Output: "S.H"
console.log(getInitials("patrick feeney")); // Output: "P.F"

// 11. Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

function getCountSheeps(sheep) {
    let numberOfSheeps = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            numberOfSheeps++;
        }
    }
    return numberOfSheeps;
}

console.log(getCountSheeps(
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));

// 12. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function getReversedArrayOfDigits(numbers) {
    const convertedToString = numbers.toString();
    const splitString = convertedToString.split('');
    const reverseString = splitString.reverse();
    return reverseString.map(Number);
}

console.log(getReversedArrayOfDigits(35231));

// 13. Write a function findNeedle() that takes an array full of junk but containing one "needle".

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            return 'found the needle at position ' + i;
        }
    }
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

//  14. Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function getDoubledArray(arrayOfNumbers){
    let doubledArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const duplicatedValue = arrayOfNumbers[i] + arrayOfNumbers[i];
        doubledArray.push(duplicatedValue);
    }
    return doubledArray;
}

console.log(getDoubledArray([1, 2, 3]));