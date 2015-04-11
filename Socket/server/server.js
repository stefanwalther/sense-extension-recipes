'use strict';
var app = require( 'express' )();
var http = require( 'http' ).Server( app );
var io = require( 'socket.io' )( http );

app.get( '/', function ( req, res ) {
	res.json( {status: 'OK'} );
} );

io.on( 'connection', function ( socket ) {
	console.log( 'a user connected' );
} );

io.on( 'connection', function ( socket ) {
	console.log( 'a user connected' );

	function sendMsg () {
		var d = new Date();
		var t = d.toLocaleTimeString();
		console.log( t + ': sending new status ...' );
		socket.emit( 'status', t + 'New event ... ' );
	}

	var timer = setInterval( sendMsg, 2000 );

	socket.on( 'disconnect', function () {
		console.log( 'user disconnected' );
		clearInterval( timer );
	} );

} );

http.listen( 3000, function () {
	console.log( 'listening on *:3000' );
} );