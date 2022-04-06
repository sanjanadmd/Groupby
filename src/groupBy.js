const isEqual = require('./isEqual.js').isEqual;

const groupBy = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      groups[index].push(element);
      return groups;
    }
  }
  groups.push([element]);
  return groups;
};

const groupElements = function (list) {
  const groups = [];
  for (let index = 0; index < list.length; index++) {
    groupBy(list[index], groups);
  }
  return groups;
};

exports.groupElements = groupElements;
