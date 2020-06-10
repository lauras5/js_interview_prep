function numJewelsInStone(jewel, stone) {
  let count = 0;

  for (const s of stone) {
    if (jewel.indexOf(s) != -1) {
      // O(n)
      count++;
    }
  }

  return count;
}

console.log(numJewelsInStone("aA", "aAAbbe")); // output 3
