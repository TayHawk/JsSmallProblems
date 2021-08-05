/////////////////// Problem 1 - Uppercase Check////////////////////
/*
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
*/
/*
function isUppercase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str === str.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
  if (str === "") return true;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
*/
/////////////////// Problem 2 - Delete Vowels ///////////////////////////////
/*
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/
// function removeVowels(arr) {
//   const x = arr.toString().split("");
//   const noVowels = x.map((elm) => {
//     return elm.replace(/[aeiouAEIOU]/g, "");
//   });
//   console.log([noVowels.join("")]);
// }

// removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
// removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]

///////////////////////////////// Problem 3 - Lettercase Counter ///////////////////////////////
/*
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.
*/
/*
function letterCaseCount(str) {
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === str[i].toUpperCase() &&
      str[i] !== "1" &&
      str[i] !== "2" &&
      str[i] !== "3" &&
      str[i] !== "+" &&
      str[i] !== " "
    ) {
      uppercase += 1;
    } else if (
      str[i] === str[i].toLowerCase() &&
      str[i] !== "1" &&
      str[i] !== "2" &&
      str[i] !== "3" &&
      str[i] !== "+" &&
      str[i] !== " "
    ) {
      lowercase += 1;
    } else {
      neither += 1;
    }
  }
  console.log({ lowercase, uppercase, neither });
}
letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
*/
///////////////////////////////// Problem 4- Capitalize Words ///////////////////////////////
/*
Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/
/*
function wordCap(str) {
  str = str.split(" ");
  const capWord = str
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  console.log(capWord);
}

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
*/
///////////////////////////////// Problem 5 - Swap Cases  ///////////////////////////////
/*

Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/
/*
function swapCase(str) {
  str = str.split("");
  const swap = str.map((elm) => {
    if (elm === elm.toUpperCase()) {
      return elm.toLowerCase();
    } else {
      return elm.toUpperCase();
    }
  });
  console.log(swap.join(""));
}

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"
*/

///////////////////////////////// Problem 6 - Staggered Caps (Part 1)  ///////////////////////////////
/*
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
*/

// function staggeredCase(str) {
//   str = str.toLowerCase();
//   let res = "";
//   for (i = 0; i < str.length; i++) {
//     res += i % 2 === 0 ? str[i].toUpperCase() : str[i];
//   }
//   console.log(res);
// }

// staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
// staggeredCase("ALL_CAPS"); // "AlL_CaPs"
// staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"

///////////////////////////////// Problem 7 - Staggered Caps (Part 2) /////////////////////////////////
/*
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.
*/
// function staggeredCase(str) {
//   str = str.toLowerCase();
//   let res = "";
//   for (i = 0; i < str.length; i++) {
//     res += i % 2 === 0 && !str[i].test(/\W/g) ? str[i].toUpperCase() : str[i];
//   }
//   console.log(res);
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

/////////////////// Problem 8 - How long are you?  ///////////////////////////////
/*
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.
*/
/*
function wordLengths(str) {
  if (str === "" || str === undefined) {
    console.log([]);
  } else {
    const words = str.split(" ");
    let arr = [];
    for (let i = 0; i < words.length; i++) {
      arr.push(`${words[i]} ${words[i].length}`);
    }
    console.log(arr);
  }
}

wordLengths("cow sheep chicken");
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []
*/
/////////////////// Problem 9 - Search Word (Part 1) ///////////////////////////////
/*
Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.
*/
/*
function searchWord(word, str) {
  str = str.toLowerCase().split(" ");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word) count++;
  }
  console.log(count);
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

searchWord("sed", text); // 3
*/

/////////////////// Problem 10 - Search Word (Part 2) ///////////////////////////////
/*
The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').
*/
/*
function searchWord(word, str) {
  str = str.toLowerCase();

  const regex = new RegExp(word, "i");

  const highlight = word.toUpperCase();
  console.log(str.replace(regex, `**${highlight}**`));
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?";

searchWord("sed", text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"
*/
