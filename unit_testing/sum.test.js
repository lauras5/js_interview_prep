const sum = require("./sum");

test("Should add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 3)).toBe(4);
  expect(sum(5, 2)).toBe(7);
});
