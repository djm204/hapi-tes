var server = require('../../server');
var read = require('./read');
var create = require('./create');
var update = require('./update');

//API Routes
var readRoute = {
	path: "/items/{id?}",
	method: "GET",
	handler: function (request, reply){
		var id = request.params.id || null;
		read(id)
			.then(reply)
			.catch(function (error) {return reply (console.error(error) ); });
	}
};

var createRoute = {
	path: "/items",
	method: "PUT",
	handler: function (request, reply){
		create(request.payload)
			.then(reply)
			.catch(function (error){ return reply(console.error("Error: "+error)); });
	}	
};

var updateRoute = {
	path: "/items",
	method: "POST",
	handler: function (request, reply){
		update(request.payload)
			.then(reply)
			.catch(function(error){ return reply(console.error("Error: "+error));  });
	}
};

server.route(readRoute);
server.route(createRoute);
server.route(updateRoute);