const isEqual = require("../src/isEqual.js").isEqual;

const assert = function (actual, expected, description) {
  const status = isEqual(actual, expected) ? '✅' : '❌';
  console.log(status, description);
};

exports.assert = assert;