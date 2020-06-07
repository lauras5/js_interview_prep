// using recursion
function rangeSumBST(root, L, R) {
  let totalSum = 0;

  function helper(node) {
    if (!node) {
      return;
    }
    console.log(node.val);
    if (node.val >= L && node.val <= R) {
      totalSum += node.val;
    }

    if (L < node.val) {
      helper(node.left);
    }

    if (R > node.val) {
      helper(node.right);
    }
  }

  helper(root);
  console.log(totalSum);
}

rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10);
