let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
