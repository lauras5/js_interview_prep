// remove dupe numbers
let numArr = [2, 4, 6, 7, 8, 8, 9, 1, 2, 7];

function removeDupes(arr) {
  let newArr = [];

  // o(n)
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }

  // sort array
  // o(n log n)
  newArr.sort(function (a, b) {
    return a - b;
  });

  // return
  return newArr;
}

console.log(removeDupes(numArr));

function removeDupes2(arr) {
  // sor array and remove element if equal to preceding element
  return arr.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
}

console.log(removeDupes2(numArr));
