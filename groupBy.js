const areEqual = function (lhs, rhs) {
  if (!Array.isArray(lhs) || !Array.isArray(rhs)) {
    return lhs === rhs;
  }

  if (lhs.length !== rhs.length) {
    return false;
  }

  for (let index = 0; index < rhs.length; index++) {
    if (!areEqual(lhs[index], rhs[index])) {
      return false;
    }
  }
  return true;
};

const groupBy = function (element, groupedElements) {
  const groups = groupedElements.slice(0);
  for (let index = 0; index < groups.length; index++) {
    if (areEqual(element, groups[index][0])) {
      groups[index].push(element);
      return groups;
    }
  }
  groups.push([element]);
  return groups;
};

const groupElements = function (batch) {
  let groups = [];
  for (let index = 0; index < batch.length; index++) {
    groups = groupBy(batch[index], groups);
  }
  return groups;
};

console.log(groupElements([1]));
console.log(groupElements([1, 3]));
console.log(groupElements([1, 2, 1]));
console.log(groupElements([1, 2, 3, 1, 2, 4]));
console.log(groupElements([[1, 1], 1, [1, 1], 1]));
console.log(groupElements([[1, [1, 1]], 1, [1, [1, 1]], 1]));
