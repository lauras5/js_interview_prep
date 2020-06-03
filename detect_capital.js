// leetcode #520
// judge whether the usafe of capitalsis is right or not
// all capitals
// all not capitals
// only first letter is capital

let detectCapitalUse = function (word) {
  let uppers = 0; // type number constant space

  for (let i = 0; i < word.length; i++) {
    // O(n)
    if (word[i] == word[i].toUpperCase()) {
      uppers++;
    }
  }

  return (
    word.length == uppers ||
    (word[0] == word[0].toUpperCase() && uppers == 1) ||
    uppers == 0
  );
};

console.log(detectCapitalUse("Man")); // => true
console.log(detectCapitalUse("elePHant")); // => false
console.log(detectCapitalUse("yellow")); // =>true
console.log(detectCapitalUse("NWA")); // => true
