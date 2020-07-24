// flatten nested array using foreach loop
// recursive solution

function flatten(arr) {
  let result = [];

  arr.forEach((num) => {
    if (Array.isArray(num)) {
      result.push(...flatten(num));
    } else {
      result.push(num);
    }
  });

  return result;
}

let nested = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10];
console.log(flatten(nested));
