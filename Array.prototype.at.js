function at(n) {
  n = Math.trunc(n) || 0
  if (n < 0) n += this.length
  if (n < 0 || n >= this.length) return undefined
  return this[n]
}

// test
Array.prototype.hAt = at

const arr = [0, 1, 2, 3, 4, 5, 6]

console.log(arr.hAt(0))
console.log(arr.hAt(6))
console.log(arr.hAt(9))
console.log(arr.hAt(-1))
console.log(arr.hAt(-9))
