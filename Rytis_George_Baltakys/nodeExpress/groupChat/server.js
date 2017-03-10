var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(__dirname + '/static'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

count = 0

app.get('/', function (req, res){
	data = {
		count: count
	}
	res.render('index', data)
})

var server = app.listen(8000, function() {
	console.log("listening on port 8000")
})

var io = require('socket.io').listen(server);


// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);

	socket.on('button_clicked', function(data) {
		data.count = ++count
		console.log(data)
		io.emit('server_response', data)
		// //  EMIT:
		// socket.emit('my_emit_event');
		// //  BROADCAST:
		// socket.broadcast.emit("my_broadcast_event");
		// //  FULL BROADCAST:
		// io.emit("my_full_broadcast_event");
	})

	socket.on('reset_clicked', function(data) {
		count = 0
		data.count = count
		console.log(data)
		io.emit('server_response', data)
	})

})
