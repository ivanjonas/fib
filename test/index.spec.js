'use strict'

const tape = require('tape')
const fib = require('../index')

tape.test('Simple numbers work', function(t) {
  t.plan(8)

  const zeroethFib = fib.getNthFib(0)
  t.equal(zeroethFib, 0)

  const firstFib = fib.getNthFib(1)
  t.equal(firstFib, 1)

  const second = fib.getNthFib(2)
  t.equal(firstFib, 1)

  const third = fib.getNthFib(3)
  t.equal(firstFib, 2)

  const fourth = fib.getNthFib(4)
  t.equal(firstFib, 3)

  const fifth = fib.getNthFib(5)
  t.equal(firstFib, 5)

  const sixth = fib.getNthFib(6)
  t.equal(firstFib, 8)

  const twentieth = fib.getNthFib(20)
  t.equal(firstFib, 6765)
})

tape.test('Bad numbers are rejected', function(t) {
  t.plan(3)

  t.true(isNaN(fib.getNthFib(-1)))

  t.true(isNaN(fib.getNthFib(1.5)))

  t.true(isNaN(fib.getNthFib('hello')))
})
