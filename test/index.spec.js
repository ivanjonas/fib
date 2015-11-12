'use strict'

const tape = require('tape')
const fib = require('../index')

tape.test('Simple numbers work', function (t) {
  t.plan(8)

  t.equal(fib.getNthFib(0), 0)

  t.equal(fib.getNthFib(1), 1)

  t.equal(fib.getNthFib(2), 1)

  t.equal(fib.getNthFib(3), 2)

  t.equal(fib.getNthFib(4), 3)

  t.equal(fib.getNthFib(5), 5)

  t.equal(fib.getNthFib(6), 8)

  t.equal(fib.getNthFib(20), 6765)
})

tape.test('Bad numbers are rejected', function (t) {
  t.plan(3)

  t.true(isNaN(fib.getNthFib(-1)))

  t.true(isNaN(fib.getNthFib(1.5)))

  t.true(isNaN(fib.getNthFib('hello')))
})
