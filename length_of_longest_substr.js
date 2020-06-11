/**
 *
 * @param {string} str
 * @return {number}
 */
// brute force
let lengthOfLongestSubstring = function (str) {
  // set count
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let set = new Set();
    set.add(char);

    for (let j = i + 1; j < str.length; j++) {
      let char2 = str.charAt(j);
      if (set.has(char2)) {
        break;
      } else {
        set.add(char2);
      }

      count = Math.max(count, set.size);
      console.log(set);
    }
  }

  // return count
  return count;
};

// O(n2)

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result); // 2

function lols(str) {
  let count = 0;
  let i = 0;
  let j = 0;
  let strLen = str.length;
  let set = new Set();

  while (i < strLen && j < strLen) {
    let char = str.charAt(j);
    if (!set.has(char)) {
      set.add(char);
      j++;
      count = Math.max(count, j - i);
      console.log(set);
    } else {
      set.delete(str.charAt(i));
      i++;
    }
  }
  return count;
}

let r = lols("aaabb");
console.log(r); // 2
