// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// let input = document.getElementById("si_input");

function incrementString(input) {
  var newStr = input.slice(0, -1); // get string minus last
  var lastDigit = input.slice(-1).match(/[0-9]/); // match number
  if (lastDigit === null) {
    return input + "1"; // if no numbers, add 1 to end of string
  }
  if (lastDigit != "9") {
    return newStr + (parseInt(lastDigit) + 1); // if not equal to 9 add 1
  } else {
    return incrementString(newStr) + "0"; // else use recursion
  }
}

console.log(incrementString("")); // returns 1
console.log(incrementString("foo0999")); // returns foo1000
console.log(incrementString("foo0166")); //returns foo0167
