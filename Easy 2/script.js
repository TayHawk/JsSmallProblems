///////////////////////////////// Problem 1 - Welcome Stranger ///////////////////////////////////////////////

/*
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

/*
function greetings(arr, obj) {
  const sentence = `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${
    obj.occupation
  } around.`;
  return sentence;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
*/

///////////////////////////////// Problem 2 - Greeting a user
///////////////////////////////////////////////

/* 
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.
*/
/*
function greet(name) {
  name = prompt("What is your name?");
  if (name.includes("!")) {
    const sentence = `Hello ${name.slice(
      0,
      name.length - 1
    )}. why are we screaming?`;
    console.log(sentence.toUpperCase());
  } else {
    console.log(`Hello ${name}`);
  }
}

greet();
greet();
*/

///////////////////////////////// Problem 3 - Multiplying Two Numbers
///////////////////////////////////////////////
/*
Create a function that takes two arguments, multiplies them together, and returns the result.
*/
/*
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 3) === 15); // logs true
*/

///////////////////////////////// Problem 4 - Squaring an Argument
///////////////////////////////////////////////
/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
*/
/*
function square(num) {
  return num * num;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
*/

///////////////////////////////// Problem 5 - Arithmetic Integer
///////////////////////////////////////////////

/*
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/

/*
function Arithmetic() {
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
  console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
  console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);
}

Arithmetic();
*/

///////////////////////////////// Problem 6 - The End Is Near But Not Here
///////////////////////////////////////////////
/*
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/
/*
function penultimate(str) {
  return str.split(" ").slice(-2, -1).join("");
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

///////////////////////////////// Problem 7 - Exclusive Or
///////////////////////////////////////////////
/*
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/
/*
function xor(elm1, elm2) {
  return !!((elm1 && !elm2) || (elm2 && !elm1));
}
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
*/

///////////////////////////////// Problem 8 - Odd Lists
///////////////////////////////////////////////
/*
Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
*/
/*
function oddities(arr) {
  const oddArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    oddArr.push(arr[i]);
  }
  return oddArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/

///////////////////////////////// Problem 9 - Convert a String to a Number!
///////////////////////////////////////////////

/*
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

*/
// function stringToInteger(str) {
//   let final = [];
//   str.split("").forEach((num) => {
//     switch (num) {
//       case "0":
//         final.push(0);
//         break;
//       case "1":
//         final.push(1);
//         break;
//       case "2":
//         final.push(2);
//         break;
//       case "3":
//         final.push(3);
//         break;
//       case "4":
//         final.push(4);
//         break;
//       case "5":
//         final.push(5);
//         break;
//       case "6":
//         final.push(6);
//         break;
//       case "7":
//         final.push(7);
//         break;
//       case "8":
//         final.push(8);
//         break;
//       case "9":
//         final.push(9);
//         break;
//     }
//   });
//   for (let num of final) {
//     console.log(num);
//   }
// }
/*
function stringToInteger(str) {
  return str * 1;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

*/
/*
function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits = str.split("").map((char) => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 10 * value + digit));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
*/

/////////// Problem 10 -Convert a String to a Signed Number! //////////
/*
In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.
*/
/*
function stringToSignedInteger(str) {
  return str * 1;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
*/
/////////// Problem 11 - Convert a Number to a String! //////////
/*
function integerToString(num) {
  let str = `${num}`;
  console.log(str);
}

integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"
*/
/////////// Problem 12 -Convert a Signed Number to a String! //////////
/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
*/
/*
function signedIntegerToString(num) {
  if (Math.sign(num) === 1) {
    let x = `+${num}`;
    return x;
  } else {
    let y = `${num}`;
    return y;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
*/
