let scores = [26, 89, 23, 34, 45, 18, 37, 78, 90, 100];

// sort by ascending order
console.log(
  scores.sort(function (a, b) {
    return a - b;
  })
);

// sort by descending order
console.log(
  scores.sort(function (a, b) {
    return b - a;
  })
);

// get lowest value in array
console.log(
  "lowest number -> " +
    scores.sort(function (a, b) {
      return a - b;
    })[0]
);

// get highest value in array
console.log(
  "highest number -> " +
    scores.sort(function (a, b) {
      return b - a;
    })[0]
);

// sort strings
let fruits = ["apple", "orange", "banana", "grape", "cherry"];
console.log(fruits.sort());
console.log(fruits.reverse());

let word = "simpsons";

let wordArr = word.split("").reverse().join("");
console.log(`simpsons reversed => ${wordArr}`);
