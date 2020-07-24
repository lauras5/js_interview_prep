// given an array of ints return indices of the two numbers that add up to target
// brute force O(n2)
// grows exponentially
let numArr = [1, 2, 3, 6, 7, 8];

function twoSum(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
}

var twoSum2 = function (nums, target) {
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

console.log(twoSum(numArr, 5)); // output [2, 3]

// hash/obj solution O(n)
function twoSumHash(nums, target) {
  let numObj = {};

  for (let i = 0; i < nums.length; i++) {
    let thisNum = nums[i];
    numObj[thisNum] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
      return [i, numObj[diff]];
    }
  }
}

console.log(twoSumHash([2, 7, 11, 15], 9)); // output [0, 1]
