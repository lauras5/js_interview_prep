// filter method
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

let arr = ["Mable", "Cicily", "Brian", "Check", "Bill", "Rain", "River"];

// returns new array with elements that pass the test
let beginWithB = arr.filter((name) => name[0] == "B");
console.log(beginWithB); 
// ['Brian','Bill']

function startsWithC(value) {
  return value[0] == "C";
}

let cNames = arr.filter(startsWithC);
console.log(cNames); 
// ['Cicily','Check']
