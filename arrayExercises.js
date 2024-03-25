/* #1
Use the elements from thingsInHome array and thingsInGarden array to create madeOutOfWood array and edibles  array.
 */

const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

// -- edit below --
const madeOutOfWood = [thingsInHome[3], thingsInHome[4], thingsInGarden[1], thingsInGarden[2], thingsInGarden[4]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];
// -- edit above --

document.body.innerText = `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`;

/*
Write the getSmallestNumber function.
Write two versions of the above function: one using a for  loop and one using the sort  function
 */
function getSmallestNumber(arrayOfNumbers) {
    const sortedArray = arrayOfNumbers.sort();
    return sortedArray[0];
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4

/*
Write the getSquaredNumbers function.
Don't modify the array passed as an argument.
 */

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
console.log(getSquaredNumbers(numbers)); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]

function getSquaredNumbers(arrayWithNumbers) {
    let squaredNumber = [];
    for (let i = 0; i < arrayWithNumbers.length; ++i) {
        squaredNumber.push(Math.pow(arrayWithNumbers[i], 2));
    }
    return squaredNumber;
}

console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

/*
Write the getReversedString function.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

function getReversedString(stringToReverse) {
    let reversedStringPerChars = '';
    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        reversedStringPerChars += stringToReverse[i];
    }
    return reversedStringPerChars;
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

/*
Write the isPalindrome function. Inside the isPalindrome function, call the getReversedString function.
It should be case-insensitive and shouldn't take spaces into consideration.
*/

function isPalindrome(stringToCheck) {
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')) // true
console.log(isPalindrome('Hello!')); // false

/*
Write the getAgeDifference function that finds the difference between the youngest and oldest person. Inside the
getAgeDifference function call the getYoungestPerson and getOldestPerson functions that you write yourself.
*/

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

function getYoungestPerson(firstPerson, secondPerson) {
    const firstPersonAge = firstPerson.age;
    const secondPersonAge = secondPerson.age;

    return firstPersonAge - secondPersonAge;
}

const youngestPerson = peopleArray.sort(getYoungestPerson)[0]
console.log(youngestPerson);

function getOldestPerson(firstPerson, secondPerson) {
    const firstPersonAge = firstPerson.age;
    const secondPersonAge = secondPerson.age;

    return secondPersonAge - firstPersonAge;
}

const oldestPerson = peopleArray.sort(getOldestPerson)[0]
console.log(oldestPerson);
function getAgeDifference(people) {
    return oldestPerson[peopleArray.length-1] -  youngestPerson[0];
}

console.log(getAgeDifference(peopleArray));

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

function positiveSum(arr) {
    let index = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            index += arr[i];
        }
    }
    return index;
}

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9.
 */

function squareSum(numbers) {
    var index = 0;
    for (i = 0; i < numbers.length ; i++) {
        index += Math.pow(numbers[i], 2);
    }
    return index;
}

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
 */

function abbrevName(name){

    // code away

}