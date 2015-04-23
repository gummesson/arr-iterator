/**
 * Initialize `ArrIterator`.
 *
 * @constructor
 * @param {array} arr
 *
 * @api public
 */

function ArrIterator(arr) {
  this._array = arr
  this._index = 0
}

/**
 * Create the next item.
 *
 * @return {object}
 *
 * @api public
 */

ArrIterator.prototype.next = function() {
  var done  = this._index >= this._array.length
  var value = !done
    ? this._array[this._index++]
    : undefined
  return {
    done: done,
    value: value
  }
}

/**
 * Exports
 */

module.exports = ArrIterator
