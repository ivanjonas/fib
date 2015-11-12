'use strict'

module.exports = {
  getNthFib,
  getFibArray
}

/**
 * Given an integer n, returns the nth Fibonacci number. The 1st and 2nd Fibonacci numbers are 1, and the 0th Fibonacci
 * number is 0.
 * @param n integer index of the desired Fibonacci number in the Fibonacci sequence
 */
function getNthFib (n) {
  var arr = getFibArray(n)
  return arr.pop()
}

/**
 * Given an integer n, return an array of length n+1 that contains all Fibonacci numbers up to the nth number.
 * @param n the integer index of the largest desired Fibonacci number in the Fibonacci sequence
 */
function getFibArray (n) {
  let arr

  if (n === 0) {
    return [0]
  }

  arr = [0, 1]

  if (n === 1) {
    return arr
  }

  while (arr.length <= n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return arr
}
