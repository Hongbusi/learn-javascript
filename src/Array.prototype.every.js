function every(callbackFn, thisArg) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`)
  }

  for (let i = 0; i < this.length; i++) {
    if (!callbackFn.call(thisArg, this[i], i, this)) {
      return false
    }
  }
  return true
}

Array.prototype._every = every
const arr = [1, 2, 3, 4]

arr._every((item) => item < 2)
