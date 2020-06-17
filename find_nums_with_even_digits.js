let findNumber = function (nums) {
  let result = 0;
  // loop through array

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);

    if (num.toString().length % 2 == 0) {
      result++;
    }
  }

  return result;
};

// take negatives?
let numArr = [1235, 123, -34, 4567, 567]; // 3
console.log(findNumber(numArr));
