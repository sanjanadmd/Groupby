const areArrays = function (entity1, entity2) {
  const isArray = Array.isArray;
  return isArray(entity1) && isArray(entity2)

};

const isEqual = function (lhs, rhs) {
  if (!areArrays(lhs, rhs)) {
    return lhs === rhs;
  }

  if (lhs.length !== rhs.length) {
    return false;
  }

  for (let index = 0; index < rhs.length; index++) {
    if (!isEqual(lhs[index], rhs[index])) {
      return false;
    }
  }
  return true;
};

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

const groupElements = function (batch) {
  const groups = [];
  for (let index = 0; index < batch.length; index++) {
    groupBy(batch[index], groups);
  }
  return groups;
};

console.log(groupElements([1]));
console.log(groupElements([1, 3]));
console.log(groupElements([1, 2, 1]));
console.log(groupElements([1, 2, 3, 1, 2, 4]));
console.log(groupElements([[1, 1], 1, [1, 1], 1]));
console.log(groupElements([[1, [1, 1]], 1, [1, [1, 1]], 1]));
