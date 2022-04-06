const groupFrequencies = require('../src/groupFrequencies.js').groupFrequencies;
const assert = require('./assert.js').assert;

const testGroupFrequencies = function (array, expectedGroups, description) {
  const actualGroups = groupFrequencies(array);
  assert(actualGroups, expectedGroups, description);
};

const groupFrequenciesTests = function () {
  testGroupFrequencies([], [], 'Empty Array');
  testGroupFrequencies([1], [[1, 1]], 'Single element');
  testGroupFrequencies([[1]], [[[1], 1]], 'Single element as arrays');
  testGroupFrequencies([1, 3], [[1, 1], [3, 1]], 'Two different elements');
  testGroupFrequencies([1, 2, 1], [[1, 2], [2, 1]], 'Two same and one differen element');
  testGroupFrequencies([1, 2, 3, 1, 2, 4], [[1, 2], [2, 2], [3, 1], [4, 1]], 'Multiple elements');
  testGroupFrequencies([[1, 1], 1, [1, 1]], [[[1, 1], 2], [1, 1]], 'With number and arrays');
  testGroupFrequencies([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], 2], [1, 2]], 'Nested arrays');
};

groupFrequenciesTests();
