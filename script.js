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
        function(a, b) {
            return a - b;
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

// 4. Write the getReversedString  function.

function getReversedString(string) {
    return string.split('').reverse().join('');
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'