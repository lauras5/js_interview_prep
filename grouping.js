let people = [
  { name: "Alice", age: 21 },
  { name: "Laura", age: 21 },
  { name: "Bob", age: 20 },
  { name: "Jose", age: 22 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

// groupedPeople is:
// { '20': [ { name: 'Bob', age: 20 } ],
//   '21': [ { name: 'Alice', age: 21 }, { name: 'Laura', age: 21 } ],
//   '22': [ { name: 'Jose', age: 22 } ] }

// remove duplicates from an array
let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

function reducer(accum, currVal) {
  if (accum.indexOf(currVal) == -1) {
    accum.push(currVal);
  }
  return accum;
}

let myOrderedArray = myArray.reduce(reducer, []);
console.log(myOrderedArray);

let dupArr = ["Mary", "India", "Gray", "Mary", "Silver", "Gray", "Silver"];

function removeDuplicates(accum, currVal) {
  if (accum.indexOf(currVal) == -1) {
    accum.push(currVal);
  }
  return accum;
}

let newArr = dupArr.reduce(removeDuplicates, []);
console.log(newArr);
