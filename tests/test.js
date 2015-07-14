var tape = require('tape')
var tests = require('abstract-stream-muxer/tests')
var MultiplexStreamMuxer = require('../src')

var common = {
  setup: function (t, cb) {
    cb(null, MultiplexStreamMuxer)
  },
  teardown: function (t, cb) {
    cb()
  }
}

tests(tape, common, false)
