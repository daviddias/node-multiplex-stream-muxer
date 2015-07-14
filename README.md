multiplex-stream-muxer Node.js Implementation
=============================================

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Abstraction on top of multiplex, implementing the abstract-stream-muxer interface

[![](https://github.com/diasdavid/abstract-stream-muxer/blob/master/img/badge.png)](https://github.com/diasdavid/abstract-stream-muxer)

# Usage

multiplex-stream-muxer follows the [abstract-stream-muxer API](https://github.com/diasdavid/abstract-stream-muxer#api)

# Example

```JavaScript
// Client.js
var MultiplexStreamMuxer = require('multiplex-stream-muxer')

var dialer = new MultiplexStreamMuxer()

var connDialer = dialer.attach(pair, false)

connDialer.dialStream(function (err, stream) {
  t.ifError(err, 'Should not throw')
  t.pass('dialed stream')
})
```

```JavaScript
// Server.js
var MultiplexStreamMuxer = require('multiplex-stream-muxer')

var listener = new MultiplexStreamMuxer()

var connListener = listener.attach(pair.other, true)

connListener.on('stream', function (stream) {
  t.pass('got stream')
})
```
