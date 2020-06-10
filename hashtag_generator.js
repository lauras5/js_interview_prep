function generateHashtag(str) {
  let result = "#";

  if (str.trim().length == 0) return false;

  // must start w/ hashtag
  // first letter capitalized, index0 to upper

  result += str.split(" ").map(capitalize).join("");

  if (result.length > 140 || result === "") return false;
  return result;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(generateHashtag("Do we have A hashtag"));
