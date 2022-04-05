const areArraysEqual = function (arr1, arr2) {
  for (let index = 0; index < Math.max(arr1.length, arr2.length); index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const areEqual = function (lhs, rhs) {
  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    return areArraysEqual(lhs, rhs);
  }
  return lhs === rhs;
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
console.log(groupElements([[1, 1], 1, [1, 1], 1]));
