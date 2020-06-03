const array1 = [1, 2, 23, 45, 46, 46];

const found = array1.find((element) => element > 10); // returns first element to match
console.log(found); // output 23

const indexOfFound = array1.findIndex((element) => element > 10); // finds index of first array to match
console.log(indexOfFound); // output 2

const indexOfValue = array1.indexOf(46);
console.log(indexOfValue); // output 4, only finds first

// if you want to find all indexes, use loop
var Cars = ["Nano", "Volvo", "BMW", "Nano", "VW", "Nano"];

function getAllIndexes(arr, val) {
  var indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      indexes.push(i);
    }
  }
  return indexes;
}

console.log(getAllIndexes(Cars, "Nano")); // output 0, 3, 5
