// reduce method executes a callback, reducer function on each element of the array, single output val
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output 10

// 10 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 10));
// expected output 20

// takes 4 arguments,
//  1. accumulator
//  2. current value
//  3. current index
//  4. source array

// sum all values in an array
// let nums = [0, 1, 2, 3, 4, 5];

// let sum = nums.reduce((accum, currVal) => accum + currVal, 0);
// console.log(sum);
// expected output 15

// object array, must pass initial value
let initialValue = 0;
let objArr = [{ x: 1 }, { x: 2 }, { x: 3 }];
let sum = objArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);

console.log(sum); // logs 6

// cal also flatten arrays and concat
let nestedArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let flattened = nestedArr.reduce((accum, currVal) => accum.concat(currVal), []);

// outputs [0, 1, 2, 3, 4, 5]
console.log(flattened);

// count instance of value in an object
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

function reducer2(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}

let countedNames = names.reduce(reducer2, {}); // dont forget to add initial obj
console.log(countedNames);
