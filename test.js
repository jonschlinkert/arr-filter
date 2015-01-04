/*!
 * arr-filter <https://github.com/jonschlinkert/arr-filter>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
var should = require('should');
var filter = require('./');

describe('filter:', function () {
  it('should filter strings from the array:', function () {
    var actual = filter(['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'], function (ele) {
      return typeof ele === 'string';
    });
    actual.should.eql(['a', 'b', 'c']);
  });

  it('should filter objects:', function () {
    var actual = filter(['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'], function (ele) {
      return typeof ele === 'object';
    });
    actual.should.eql([{a: 'b'}, {c: 'd'}]);
  });

  it('should filter strings:', function () {
    function ext(extension) {
      return function(fp) {
        return path.extname(fp) === extension;
      };
    }

    filter(['a/b/c.js', 'a/b/c.css'], ext('.css')).should.eql(['a/b/c.css']);
    filter(['a/b/c.js', 'a/b/c.css'], ext('.js')).should.eql(['a/b/c.js']);
  });

  it('should throw an error when the callback is missing.', function () {
    (function() {
      filter(['a/b/c.js', 'a/b/c.css']);
    }).should.throw('arr-filter expects a callback function.');
  });
});