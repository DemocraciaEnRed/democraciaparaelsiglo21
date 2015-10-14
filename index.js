var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/site/index.html')
}).configure(function() {
    app.use('/', express.static(__dirname + '/site/'))
    app.use('/book', express.static(__dirname + '/book/'))
}).listen(port)
