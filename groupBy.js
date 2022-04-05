const areArraysEqual = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr2.length; index++) {
    if (!areEqual(arr1[index], arr2[index])) {
      return false;
    }
  }
  return true;
};

const areEqual = function (lhs, rhs) {
  return areArraysEqual(lhs, rhs) || (lhs === rhs);
};

const groupElements = function (batch) {
  if (batch.length < 1) {
    return [];
  }
  const newArray = [];
  const group = [];
  for (let index = 0; index < batch.length; index++) {
    const location = areEqual(batch[0], batch[index]) ? group : newArray;
    location.push(batch[index]);
  }
  const groupedElements = groupElements(newArray);
  groupedElements.unshift(group);
  return groupedElements;
};

console.log(groupElements([1]));
console.log(groupElements([1, 3]));
console.log(groupElements([1, 2, 1]));
console.log(groupElements([1, 2, 3, 1, 2, 4]));
console.log(groupElements([[1, 1], 1, [1, 1], 1]));
console.log(groupElements([[1, [1, 1]], 1, [1, [1, 1]], 1]));
