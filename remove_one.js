/**
 * searches for item in array
 */
function search(array, element) {
  // O(n)
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return index;
    }
  }
}

const array = [1, "word", 3.14, { a: 1 }];
console.log(search(array, "word")); // => 1
console.log(search(array, 3.14)); // => 2

// remove item from array
function remove(array, element) {
  const index = search(array, element);
  array.splice(index, 1); // O(n)
  return array;
}

const array1 = [0, 1, 2, 3];
console.log(remove(array1, 1)); // => [ 0, 2, 3 ]

// O(2n) => worst case O(n)
