var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != "POST") {
    return res.end("Only POST connections accepted\n")
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
}).on('error', console.error)

server.listen(8000)

