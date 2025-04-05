let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let isDarkMode = false;

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    historyList.innerHTML = `<li>${display.value} = ${result}</li>` + historyList.innerHTML;
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}

document.getElementById("modeToggle").addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode");
  document.getElementById("modeToggle").textContent = isDarkMode ? "☀️" : "🌙";
});
