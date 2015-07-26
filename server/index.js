var Hapi = require('hapi');


var server = new Hapi.Server();


server.connection({ port: 10700 });


server.route({ method: 'GET', path: '/{path*}', handler: { directory: { path: '/Users/jwesto1/code/techdech/locationdetail/public' }}})

server.start(function () {

    console.log('Server running at: ', server.info.uri);
});
