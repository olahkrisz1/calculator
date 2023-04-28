const buttons = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

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
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  if (buttonValue === "." && inputFieldEl.value.includes(".")) return;
  inputFieldEl.value += buttonValue;
}
