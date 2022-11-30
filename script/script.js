/**
 *
 * script.js
 * @author- Arshath
 * @date- 29/11/2022
 */
var input = document.getElementById("textarea");

function number(number1) {
  input.value += number1;
}
function equal() {
  input.value = eval(input.value);
}

function uncheck() {
  document.getElementById("textarea").value = "";
}
