function concat() {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(this[i])
  }

  for (let i = 0; i < arguments.length; i++) {
    let argument = arguments[i]
    if (argument instanceof Array) {
      for (let j = 0; j < argument.length; j++) {
        newArr.push(argument[j])
      }
    } else {
      newArr.push(argument)
    }
  }

  return newArr
}

Array.prototype._concat = concat

const arr1 = [0, 1, 2, 3]
const arr2 = [3, 4, 5, 6]
