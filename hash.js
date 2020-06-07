// hash table, hash, hash map, unordered map, dictionary
// number of occurences of each word in str
// number of unique words
// cryptography
// great for insertion, deletion, retrieval
// not optimal for searching
let dictionary = {};

dictionary.one = "1";
dictionary.two = "2";
dictionary.three = 3;

console.log(dictionary.one); // output '1'

// using map
let myMap = new Map();

let keyObj = {};
let keyFunc = function () {};
keyString = "a string";

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

myMap.get(keyString);
myMap.get(keyObj);
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

// loop through obj
for (const prop in dictionary) {
  console.log(`${prop}: ${dictionary[prop]}`);
}

// lop map
myMap.forEach(logElements);

function logElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}
