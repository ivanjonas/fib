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

tape.test('Bad input is rejected', function (t) {
  t.plan(8)

  t.equal(fib.getNthFib(), undefined) // undefined

  t.equal(fib.getNthFib(null), undefined)

  t.equal(fib.getNthFib(NaN), undefined)

  t.equal(fib.getNthFib(-1), undefined)

  t.equal(fib.getNthFib(1.5), undefined)

  t.equal(fib.getNthFib('hello'), undefined)

  t.equal(fib.getNthFib(true), undefined)
  t.equal(fib.getNthFib(false), undefined) // should not be like getNthFib(0)
})
