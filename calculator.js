// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

console.log("=> Welcome to the Calculator App!");

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

while (true) {
  const firstNum = Number(prompt("Enter the first number"));
  const secondNum = Number(prompt("Enter the second number"));

  const operation = Number(
    prompt(
      "What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
    )
  );

  let result;
  switch (operation) {
    case 1:
      result = firstNum + secondNum;
      break;
    case 2:
      result = firstNum - secondNum;
      break;
    case 3:
      result = firstNum * secondNum;
      break;
    case 4:
      result = firstNum / secondNum;
      break;
  }
  console.log(`Result = ${result}`);

  let response = prompt(
    "Would you like to perform another calculation? \n Y or N"
  ).toUpperCase();
  if (response !== "Y") break;
}
