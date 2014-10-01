/*!
 * arr-filter <https://github.com/jonschlinkert/arr-filter>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var makeIterator = require('make-iterator');

'use strict';

module.exports = function filter(arr, cb, thisArg) {
  cb = makeIterator(cb, thisArg);
  if (arr == null) {
    return [];
  }

  if (typeof cb != 'function') {
    return new TypeError('Filter expects a callback function.');
  }

  var len = arr.length;
  var res = [];

  for (var i = 0; i < len; i++) {
    var ele = arr[i];

    if (cb(ele, i, arr)) {
      res.push(ele);
    }
  }
  return res;
};
