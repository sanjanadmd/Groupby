const groupElements = require('./groupBy.js').groupElements;
const assert = require('./assert.js').assert;

const testGroupElements = function (array, expectedGroups, description) {
  const actualGroups = groupElements(array);
  assert(actualGroups, expectedGroups, description);
};

const groupElementsTests = function () {
  testGroupElements([], [], 'Empty array');
  testGroupElements([1], [[1]], 'Single element');
  testGroupElements([1, 3], [[1], [3]], 'Two different elements');
  testGroupElements([1, 2, 1], [[1, 1], [2]], 'Two same and one differen element');
  testGroupElements([1, 2, 3, 1, 2, 4], [[1, 1], [2, 2], [3], [4]], 'Multiple elements');
  testGroupElements([[1]], [[[1]]], 'Single element as arrays');
  testGroupElements([[1, 1], 1, [1, 1]], [[[1, 1], [1, 1]], [1]], 'With number and arrays');
  testGroupElements([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], [1, [1, 1]]], [1, 1]], 'Nested arrays');
};

groupElementsTests();
