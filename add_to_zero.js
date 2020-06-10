// first instance
// 3 numbers in array add up to zero
let a = [1, 2, 0, -1, -3, 6];

function addThree(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      for (let k = 2; k < arr.length; k++) {
        if (i + j + k === 0) {
          console.log(i + j + k);
          return i + j + k;
        }
      }
    }
  }
}

console.log(addThree(a));
