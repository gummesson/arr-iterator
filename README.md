# arr-iterator

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

An iterator for arrays.

## Installation

```
npm install arr-iterator
```

## Usage

``` javascript
var ArrIterator = require('arr-iterator')

var arr  = ['foo', 'bar', 'baz']
var iter = new ArrIterator(arr)

iter.next() // => { done: false, value: 'foo' }
iter.next() // => { done: false, value: 'bar' }
iter.next() // => { done: false, value: 'baz' }
iter.next() // => { done: true, value: undefined }
```

[npm-img]: https://img.shields.io/npm/v/arr-iterator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/arr-iterator
[license-img]: http://img.shields.io/npm/l/arr-iterator.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/arr-iterator.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/arr-iterator
