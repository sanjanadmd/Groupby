const groupElements = require('./groupBy.js').groupElements;
const isEqual = require('./isEqual').isEqual;

const testGroupBy = function (array, expectedGroups, description) {
  const testPassed = isEqual(groupElements(array), expectedGroups);
  const status = testPassed ? '✓' : 'x';

  console.log(status, '-', description);
  return testPassed;
};

const groupByTests = function () {
  testGroupBy([1], [[1]], 'Single element');
  testGroupBy([1, 3], [[1], [3]], 'Two different elements');
  testGroupBy([1, 2, 1], [[1, 1], [2]], 'Two same and one differen element');
  testGroupBy([1, 2, 3, 1, 2, 4], [[1, 1], [2, 2], [3], [4]], 'Multiple elements');
  testGroupBy([[1]], [[[1]]], 'Single element as arrays');
  testGroupBy([[1, 1], 1, [1, 1]], [[[1, 1], [1, 1]], [1]], 'With number and arrays');
  testGroupBy([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], [1, [1, 1]]], [1, 1]], 'Nested arrays');
};

groupByTests();
