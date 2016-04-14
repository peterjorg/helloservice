'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
        return reply('Hello World');
    }
});

server.start(function (err) {
    if (err) {
        console.log('Error: ' + err);
        throw err;
    }
    
    console.log('Server running at: ' + server.info.uri);
});
