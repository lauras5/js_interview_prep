// EASY
/** Fizzbuzz
  print 1 - 100 , 
  multiples of 3 => fizz, 
  multiples 5 => buzz, 
  3&5 => fizzbuzz
*/

// basic for loop
// time complexity is O(n)
for (let i = 1; i <= 100; i++) {
  // complexity of if statement is constant
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz ");
  } else if (i % 3 == 0) {
    console.log("fizz ");
  } else if (i % 5 == 0) {
    console.log("buzz ");
  } else {
    console.log(i + " ");
  }
}

/** Two Sum
 * return indices of 2 nums in array that
 * add up to target
 */

var twoSum = function (nums, target) {
  const map = new Map();
  // look speed in map is O(1) faster but takes more memory than conventional solution
  for (let i = 0; i < nums.length; i++) {
    let curVal = nums[i];

    if (map.has(curVal)) {
      return [map.get(curVal), i];
    }

    let diff = target - curVal;
    map.set(diff, i);
  }
};
