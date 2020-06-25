var maxArea = function (height) {
  // set variables
  let max = 0; // set to 0 in order to use Math.max to compare first time
  let area;
  let first = 0;
  let last = height.length - 1;

  while (first < last) {
    area = (last - first) * Math.min(height[first], height[last]);

    max = Math.max(area, max);

    height[first] > height[last] ? last-- : first++;
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output 49
