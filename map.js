// map usage
let myMap = new Map();
// myMap.set("bla", "blah");
// myMap.set("bla2", "blaah2");
// myMap.set("bla3", "blaah3");

// return number of key/value pairs in Map object
// console.log("myMap.size => " + myMap.size);
// console.log("myMap => ", myMap);
// // remove instance,
// // returns true/false if instance is in object and has been deleted
// console.log("myMap.delete('bla2') => " + myMap.delete("bla2"));
// console.log("myMap.delete('bla2') => " + myMap.delete("bla2"));
// console.log("myMap.has('bla2') => " + myMap.has("bla2"));
// console.log("myMap => ", myMap);
// // clears all key/value from map obj
// console.log("myMap.clear()");
// myMap.clear();
// console.log(myMap);

// ================================================
// myMap.set(0, "zero");
// myMap.set(1, "one");

for (let [key, value] of myMap) {
  console.log(key + " = " + value);
}

for (let [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}

for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}

myMap.forEach(function (value, key) {
  console.log(key + " = " + value);
});

let clone = new Map(myMap);

console.log(clone.get(1));
// =============================================
let numArr = [5, 10, 15, 20, 25];

let mappedArr = numArr.map(myFunc);

// vs

let loopArr = [];
for (let i = 0; i < numArr.length; i++) {
  loopArr.push(numArr[i] * 5);
}

function myFunc(num) {
  return num * 5;
}

console.log(mappedArr);
console.log(loopArr);

let string = "Please make each word uppercase";
let strArr = string.split(" ");
// console.log(strArr);
let newStr = strArr.map(uppercase).join(" ");

function uppercase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(newStr);
