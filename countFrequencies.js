const isEqual = require('./isEqual.js').isEqual;

const frequency = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return groups[index][1]++;
    }
  }
  return groups.push([element, 1]);
};

const countFrequencies = function (batch) {
  const groups = [];
  for (let index = 0; index < batch.length; index++) {
    frequency(batch[index], groups);
  }
  return groups;
};

exports.countFrequencies = countFrequencies;
