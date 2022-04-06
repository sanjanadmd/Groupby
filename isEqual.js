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

exports.isEqual = isEqual;
