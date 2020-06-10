// regex to count number of words in sentence
function countWords(str) {
  str = str
    .replace(/(^\s*)|(\s*$)/gi, "")
    .replace(/[ ]{2,}/gi, " ")
    .replace(/\n /, "\n");
  return str.split(" ").length;
}

console.log(countWords("  this is a string    with seven   words   ")); // 7
console.log(
  countWords("  this is a string    with twelve  very short words  in a row ")
); // 12
