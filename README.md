# arr-filter [![NPM version](https://badge.fury.io/js/arr-filter.svg)](http://badge.fury.io/js/arr-filter)

> Faster alternative to javascript's native filter method.

[array-filter](https://github.com/juliangruber/array-filter) is pretty popular, but it's tuned to be used in older browsers and it falls back on native `.filter()` when available, which is much slower. See [jsperf results](http://jsperf.com/array-filter-while-vs-for/2). The functions used in the benchmarks are the top performers, reduced down from 10 or 11 additional functions.

## Install with [npm](npmjs.org)

```bash
npm i arr-filter --save
```
### Install with [bower](https://github.com/bower/bower)

```bash
bower install arr-filter --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var filter = require('arr-filter');

filter(['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'], function (ele) {
  return typeof ele === 'string';
});
//=> ['a', 'b', 'c']
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 


### Other javascript/node.js utils

Other projects that I maintain:

  - [assemble](https://github.com/jonschlinkert/assemble)
  - [verb](https://github.com/jonschlinkert/verb)
  - [less.js](https://github.com/jonschlinkert/less.js)
  - [handlebars-helpers](https://github.com/jonschlinkert/handlebars-helpers)
  - [arr](https://github.com/jonschlinkert/arr)
  - [arr-diff](https://github.com/jonschlinkert/arr-diff)
  - [array-last](https://github.com/jonschlinkert/array-last)
  - [array-slice](https://github.com/jonschlinkert/array-slice)
  - [array-sum](https://github.com/jonschlinkert/array-sum)
  - [arrayify-compact](https://github.com/jonschlinkert/arrayify-compact)
  - [compact-object](https://github.com/jonschlinkert/compact-object)
  - [delete](https://github.com/jonschlinkert/delete)
  - [for-in](https://github.com/jonschlinkert/for-in)
  - [for-own](https://github.com/jonschlinkert/for-own)
  - [has-any](https://github.com/jonschlinkert/has-any)
  - [has-value](https://github.com/jonschlinkert/has-value)
  - [is-number](https://github.com/jonschlinkert/is-number)
  - [is-plain-object](https://github.com/jonschlinkert/is-plain-object)
  - [mixin-deep](https://github.com/jonschlinkert/mixin-deep)
  - [mixin-object](https://github.com/jonschlinkert/mixin-object)
  - [object-length](https://github.com/jonschlinkert/object-length)
  - [omit-empty](https://github.com/jonschlinkert/omit-empty)
  - [reduce-object](https://github.com/jonschlinkert/reduce-object)


## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 17, 2015._