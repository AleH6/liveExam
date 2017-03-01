var app = require('../app.js');
var http = require('http');
var dev = app.get('env') === 'development' ? true : false;
console.log(dev);
app.set('port', process.env.PORT);
var server = http.createServer(app);
server.listen(process.env.PORT);
console.log('im listening');
