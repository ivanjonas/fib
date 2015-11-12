'use strict'

module.exports = {
  getNthFib,
  getFibArray
}

/**
 * Given a non-negative integer n, returns the nth Fibonacci number. The 1st and 2nd Fibonacci numbers are 1, and the
 * 0th Fibonacci number is 0.
 * If a non-number, non-integer argument is passed in, returns undefined.
 * @param n integer index of the desired Fibonacci number in the Fibonacci sequence
 * @return {number|undefined}
 */
function getNthFib (n) {
  var arr = getFibArray(n)
  if (arr !== undefined && arr.length > 0) {
    return arr.pop()
  }
  return undefined
}

/**
 * Given a non-negative integer n, return an array of length n+1 that contains all Fibonacci numbers up to the nth
 * number.
 * If a non-number, non-integer argument is passed in, returns undefined.
 * @param n the integer index of the largest desired Fibonacci number in the Fibonacci sequence
 * @return {(Array|undefined)}
 */
function getFibArray (n) {
  let arr

  if (typeof n !== 'number' || n % 1 !== 0 || n < 0) {
    // is not a non-negative integer
    return undefined
  }

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
