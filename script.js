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

function getSmallestNumber(arrayOfNumbers) {
    
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4