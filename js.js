const buttons = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");
let currentOperation = ""; // this keeps track of the current calculation.

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
  currentOperation = "";
}

// 'calculateResult()' function splits 'currentOperation' string into an array of individual numbers and operators using a regular expression.
// then using 'for' loop, goes over the array, performing the appropriate arithmetic operation at each step using 'switch' statement.
// the result of calculation is stored in a 'result' variable' which is then converted into a string and used to update the 'value' property of the 'inputFieldEl' element.

function calculateResult() {
  const operations = currentOperation.split(/(\+|\-|\*|\/)/);
  let result = parseInt(operations[0], 10);

  for (let i = 1; i < operations.length; i += 2) {
    const operator = operations[i];
    const operand = parseInt(operations[i + 1], 10);
    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
    }
  }
  inputFieldEl.value = result.toString();
  currentOperation = "";
}

function appendValue(buttonValue) {
  if (buttonValue === "." && inputFieldEl.value.includes(".")) return;
  inputFieldEl.value += buttonValue;
  currentOperation += buttonValue;
}
