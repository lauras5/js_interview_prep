let merge = function (nums1, nums2) {
  return nums1.concat(nums2).sort((a, b) => a - b);
};

let nums1 = [1, 8, 3];
let nums2 = [4, 4, 6];
console.log(merge(nums1, nums2));

var merge2 = function (nums, m, nums3, n) {
  for (let i = 0; i < nums3.length; i++) {
    nums[m + i] = nums3[i];
  }
  // console.log(nums);
  nums.sort((a, b) => a - b);
};
let nums = [1, 8, 3, 0, 0, 0];
let nums3 = [4, 4, 6];
merge2(nums, 3, nums3, 3);
console.log(nums);
