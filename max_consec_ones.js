var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;
  let numLen = nums.length;

  for (let i = 0; i < numLen; i++) {
    let num = nums[i];

    if (num == 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1])); //3

// faster than for loop
let findMax = function (nums) {
  let count = 0;
  let max = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
    i++;
  }
  return max;
};
console.log(findMax([1, 0, 1, 1, 1, 0, 1])); //3
