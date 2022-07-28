// set init count to 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    }
    if (styles.contains("reset")) {
      count = 0;
    }
    if (styles.contains("increase")) {
      count++;
    }
    value.textContent = count;
  });
});
