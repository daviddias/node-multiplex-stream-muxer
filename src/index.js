var multiplex = require('multiplex')
var EventEmitter = require('events').EventEmitter
var util = require('util')

exports = module.exports = MultiplexStreamMuxer
util.inherits(Connection, EventEmitter)

function MultiplexStreamMuxer () {
  var self = this

  self.attach = function (transport, isListener, callback) {
    return new Connection(transport, isListener ? 2 : 1)
  }
}

function Connection (transport, startingId) {
  var self = this
  self.nextId = startingId

  self.dialStream = function (callback) {
    var stream = self.mpx.createStream(self.nextId)
    self.nextId = self.nextId + 2

    setImmediate(function () {
      if (callback) {
        callback(null, stream)
      } else {
        stream.emit('ready')
      }
    })

    return stream
  }

  self.mpx = multiplex(function onStream (stream, id) {
    self.emit('stream', stream)
  })

  self.mpx.on('error', function (err) {
    self.emit('error', err)
  })

  transport.pipe(self.mpx).pipe(transport)
}
