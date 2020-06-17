var duplicateZeros = function (arr) {
  // while i <= arr
  // continue adding numbers
  // if arr[i] = 0, add 2 zeros, increment i
  // splice (i, 0, 0)
  // pop last item
  // increment i
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
    i++;
  }
};

let array = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(array);
console.log(array);
