var sortedSquares = function (A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    // push to new Array vs sort after
    let absoluteVal = Math.abs(A[i]);
    result.push(Math.pow(absoluteVal, 2));
  }

  result.sort(function (a, b) {
    return a - b;
  });
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]

// less code
// a bit faster on leetcode
var sorted = function (A) {
  return A.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};
console.log(sorted([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
