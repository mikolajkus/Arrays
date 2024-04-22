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
    let squaredArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const squaredNumber = arrayOfNumbers[i] ** 2;
        squaredArray.push(squaredNumber);
    }
    return squaredArray;
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
    const replaceCharactersToLowerCase = string.replace(/\s/g, '').toLowerCase();
    const reverseString = getReversedString(replaceCharactersToLowerCase);
    return reverseString === replaceCharactersToLowerCase;
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
    const processedText = text.replaceAll(' ', '').toLowerCase();
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
    const usersSortedByAge = people.slice().sort(
        function (firstUser, secondUser) {
            return firstUser.age - secondUser.age;
        }
    )
    return usersSortedByAge[0];
}

function getOldestPerson(people) {
    const usersSortedByAge = people.slice().sort(
        function (firstUser, secondUser) {
            return firstUser.age - secondUser.age;
        }
    )
    return usersSortedByAge.pop();
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

console.log(getPositiveSum([1, -4, 7, 12]));

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
    const [firstName, lastName] = name.split(' ');
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

// Example usage
console.log(getInitials("Sam Harris")); // Output: "S.H"
console.log(getInitials("patrick feeney")); // Output: "P.F"

// 11. Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

function getCountSheep(sheep) {
    let numberOfSheep = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            numberOfSheep++;
        }
    }
    return numberOfSheep;
}

console.log(getCountSheep(
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    )
);

// 12. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function getReversedArrayOfDigits(numbers) {
    const convertedToString = numbers.toString();
    const splitString = convertedToString.split('');
    const reverseString = splitString.reverse();
    const reversedNumbers = [];
    for (let i = 0; i < reverseString.length; i++) {
        reversedNumbers.push(Number(reverseString[i]));
    }

    return reversedNumbers;
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
        const doubledValue = arrayOfNumbers[i] * 2;
        doubledArray.push(doubledValue);
    }
    return doubledArray;
}

console.log(getDoubledArray([1, 2, 3]));

//  15. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function getInvertedArray(array) {
    let invertedArray = [];
    for (let i = 0; i < array.length; i++) {
        const invertedNumber = array[i] * -1;
        invertedArray.push(invertedNumber);
    }
    return invertedArray;
}

console.log(getInvertedArray([1, -2, 3, -4, 5]));

// 16. Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

function getSumOfNumbers(numbers) {
    let sumOfNumbers = 0;
    if (numbers.length === 0) {
        return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers = sumOfNumbers + numbers[i];
    }
    return sumOfNumbers;
}

console.log(getSumOfNumbers([]));

// 17. I'm new to coding, and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// create the getArraySum function that sums the elements of a single array and use it in the arrayPlusArray function.

function getArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function getTheSumOfTwoArrays(firstArray, secondArray) {
    const firstArraySum = getArraySum(firstArray);
    const secondArraySum = getArraySum(secondArray);
    return firstArraySum + secondArraySum;
}

console.log(getTheSumOfTwoArrays([1, 2, 3], [4, 5, 6]));

// 18. Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

function getSheepCount (number){
    let murmur = '';
    for (let i = 1; i <= number; i++) {
        murmur += i + ' sheep...';
    }
    return murmur;
}

console.log(getSheepCount(10));

// 19. It's the academic year's end, fateful moment of your school report. The averages must be calculated.
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks){
    let sumOfMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i];
    }
    const averageOfMarks = sumOfMarks / marks.length;
    return Math.floor(averageOfMarks);
}

console.log(getAverage([2, 3, 4, 5]));

// 20. You take your son to the forest to see the monkeys.
// You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function getMonkeyCount(number) {
    let countedMonkey = [];
    for (let i = 1; i <= number; i++) {
        countedMonkey.push(i);
    }
    return countedMonkey;
}

console.log(getMonkeyCount([10]));