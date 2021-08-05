//////////////////////////////// Problem 1 - Rotation (Part 1) //////////////////////////////////////////
/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.
*/
/*
function rotateArray(arr) {
  if (Array.isArray(arr) && arr.length === 0) {
    return arr;
  } else if (arr === undefined || !Array.isArray(arr)) {
    return undefined;
  }
  const newArr = arr.slice();
  const x = newArr.shift();
  const y = newArr.push(x);
  return newArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array); // [2, 3, 4, 1]
// array; // [1, 2, 3, 4]
*/
////////////////////////////// Problem 2 - Rotation (Part 2) //////////////////////////////////////////
/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
*/
/*
function rotateRightmostDigits(num1, num2) {
  num1 = Array.from(String(num1), Number);
  const x = num1.splice(-num2, 1);
  num1.push(x);
  console.log(Number(num1.join("")));
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
*/

////////////////////////////// Problem 3 - Rotation (Part 3) //////////////////////////////////////////
/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

*/
/*
function maxRotation(num) {
  num = Array.from(String(num), Number);
  for (let i = 0; i < num.length; i++) {
    const newArr = num.splice(i, 1);
    num.push(newArr);
  }
  console.log(Number(num.join("")));
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
*/

////////////////////////////// Problem 4 - Stack Machine Interpretation //////////////////////////////////////////
/*
 */

////////////////////////////// Problem 5 - Word to Digit //////////////////////////////////////////

/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
*/

/*
Understand the Problem
1. take a string  return the spelling of the numbers to their actualy numeric digits
2. inout is a string
3.output is a strin
Data Structre
2. string
3 Maybe an array?
Algorithm
1. cycle through the string and replace the string number with the numeric value
*/
/*
function wordToDigit(str) {
  console.log(
    str
      .replaceAll("five", 5)
      .replaceAll("one", 1)
      .replaceAll("two", 2)
      .replaceAll("three", 3)
      .replaceAll("four", 4)
      .replaceAll("six", 6)
      .replaceAll("seven", 7)
      .replaceAll("eight", 8)
  );
}

wordToDigit("Please call me at five five seven one two three four. Thanks.");
// "Please call me at 5 5 7 1 2 3 4. Thanks."
*/

////////////////////////////// Problem 6 - Fibonacci Numbers (Recursion) //////////////////////////////////////////
/*
 */
/*
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  if (num > 2) {
    return (num = fibonacci(num - 1) + fibonacci(num - 2));
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
*/
