function reverseVowels(str) {
  const vowels = {};
  for (const char of "aeiouAEIOU") {
    vowels[char] = true;
  }

  const characters = str.split("");

  let left = 0;
  let right = str.length - 1;

  // while left is less than right
  while (left < right) {
    // while not it vowels
    while (!(str[left] in vowels)) {
      // move until at a valid vowel
      left++;
    }

    while (!(str[right] in vowels)) {
      // move until at a valid vowel
      right--;
    }

    swap(characters, left, right);
    left++;
    right--;
  }

  return characters.join("");
}
// o(n) number of characters in a string
// o(n) space complexity

// helper swap function
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(reverseVowels("Animalscience"));
