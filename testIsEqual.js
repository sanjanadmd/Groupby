const isEqual = require('./isEqual.js').isEqual;

const testIsEqual = function (lhs, rhs, expected, description) {
  const status = isEqual(lhs, rhs) === expected ? '✅' : '❌';
  console.log(status, description);
};

const isEqualTests = function () {
  testIsEqual(1, 1, true, 'LHS and RHS are same numbers');
  testIsEqual('LHS', 'LHS', true, 'LHS and RHS are same strings');
  testIsEqual([1], [1], true, 'LHS and RHS are same arrays');
  testIsEqual([1, [1]], [1, [1]], true, 'LHS and RHS are same nested arrays');
  testIsEqual(1, 2, false, 'LHS and RHS are of same type and not equal');
  testIsEqual(1, [1], false, 'LHS and RHS are of different types');
};

isEqualTests();
