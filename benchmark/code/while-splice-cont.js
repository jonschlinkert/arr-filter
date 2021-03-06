'use strict';

module.exports = function filter(arr, cb) {
  var len = arr.length;

  while (len--) {
    if (cb(arr[len])) {
      continue;
    }
    arr.splice(len, 1);
  }

  return arr;
};