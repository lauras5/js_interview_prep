function breakChocolate(n, m) {
  if (!n || !m) return 0;
  return Math.max(n * m - 1, 0);
}

console.log(breakChocolate());
console.log(breakChocolate(1, 1));
console.log(breakChocolate(5, 7));
