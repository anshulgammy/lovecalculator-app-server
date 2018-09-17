const express = require('express');
const app = express();
const port = '9999';
const fs = require('fs');

app.use(express.static('public'));

// routing
app.get('/', (req, res) => {
	res.send('Chat server is running!');
});

// server creation.
var server = app.listen(port, () => {
	console.log("Listening on port: " + port);
});

// socket.io instantiation
var io = require('socket.io').listen(server);

// listen on every connection
// socket is synonymous to a new connection
io.on('connection', (socket) => {
	// when new user is connected and data is recieved.
	socket.on('user_data', (msg) => {
		console.log(msg);
	});
	socket.on('user_ip', (msg) => {
		console.log("User connected from IP : " + msg);
	});
});

console.log = function(msg) {
	fs.appendFile("serverlog.log", "\n", function(err) {
    });
    fs.appendFile("serverlog.log", msg, function(err) {
        if(err) {            
        }
    });
};