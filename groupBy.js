const areArraysEqual = function (array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array2.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};

const areEqual = function (argument1, argument2) {
  return areArraysEqual(argument1, argument2) || argument1 === argument2;
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
