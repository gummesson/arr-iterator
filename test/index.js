/**
 * Dependencies
 */

var test        = require('tape')
var ArrIterator = require('../')

/**
 * Tests
 */

test('ArrIterator(arr)', function(assert) {
  var arr  = ['foo', 'bar', 'baz']
  var iter = new ArrIterator(arr)
  assert.deepEqual(iter.next(), { done: false, value: 'foo' })
  assert.deepEqual(iter.next(), { done: false, value: 'bar' })
  assert.deepEqual(iter.next(), { done: false, value: 'baz' })
  assert.deepEqual(iter.next(), { done: true, value: undefined })
  assert.end()
})
