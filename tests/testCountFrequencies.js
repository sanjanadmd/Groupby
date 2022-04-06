const countFrequencies = require('../src/countFrequencies.js').countFrequencies;
const assert = require('./assert.js').assert;

const testCountFrequencies = function (array, expectedGroups, description) {
  const actualGroups = countFrequencies(array);
  assert(actualGroups, expectedGroups, description);
};

const countFrequenciesTests = function () {
  testCountFrequencies([], [], 'Empty Array');
  testCountFrequencies([1], [[1, 1]], 'Single element');
  testCountFrequencies([[1]], [[[1], 1]], 'Single element as arrays');
  testCountFrequencies([1, 3], [[1, 1], [3, 1]], 'Two different elements');
  testCountFrequencies([1, 2, 1], [[1, 2], [2, 1]], 'Two same and one differen element');
  testCountFrequencies([1, 2, 3, 1, 2, 4], [[1, 2], [2, 2], [3, 1], [4, 1]], 'Multiple elements');
  testCountFrequencies([[1, 1], 1, [1, 1]], [[[1, 1], 2], [1, 1]], 'With number and arrays');
  testCountFrequencies([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], 2], [1, 2]], 'Nested arrays');
};

countFrequenciesTests();
