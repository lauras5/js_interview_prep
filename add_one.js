// leetcode #66
// give a non-empty arra of digits representing a non-negative integer, plus one to integer.

// example 1
// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.

// time complexity o(n)
// space complexity o(1)
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

// or

// O(N)
//
var POne = function (digits) {
  let num = parseInt(digits.join(""));
  num++;
  return num
    .toString()
    .split("") // return array of strings
    .map((t) => parseInt(t)); // parse chars
};

console.log(POne([1, 2, 3]));
console.log(plusOne([1, 2, 3]));
// ouptut [1, 2, 4]

console.log(POne([9, 9, 9]));
console.log(plusOne([9, 9, 9]));
// output [1, 0, 0, 0]
