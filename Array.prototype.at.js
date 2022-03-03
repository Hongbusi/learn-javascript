function at(n) {
  n = Math.trunc(n) || 0
  if (n < 0) n += this.length
  if (n < 0 || n >= this.length) return undefined
  return this[n]
}

// test
Array.prototype.newAt = at

const arr = [0, 1, 2, 3, 4, 5, 6]

console.log(arr.newAt(0))
console.log(arr.newAt(6))
console.log(arr.newAt(9))
console.log(arr.newAt(-1))
console.log(arr.newAt(-9))
