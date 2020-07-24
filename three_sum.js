/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 3 loops, on3
  let result = [];
  let allZeros = true;
  let zeroCount = 0;
  
  if (nums.length < 3) return result;
  nums.forEach((num) => {
    if (num != 0) {
      allZeros = false;
    }
    zeroCount++;
  });

  if (allZeros) {
    let len = Math.floor(zeroCount / 3);
    // console.log(len)
    for (let i = 0; i < len; i++) {
      result.push([0, 0, 0]);
    }
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          let arr = [nums[i], nums[j], nums[k]];
          arr.sort(function (a, b) {
            return a - b;
          });
          result.push(arr);
        }
      }
    }
  }

  // remove dupes from array
  let stringNums = result.map(JSON.stringify);
  // console.log(stringNums)
  let unique = new Set(stringNums);
  // console.log(unique)
  let newResult = Array.from(unique, JSON.parse);
  // console.log(newResult)
  return newResult;
};
