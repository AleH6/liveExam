let app = require('../app.js');
let http = require('http');

const dev = app.get('env') === 'development' ? true : false;
console.log(dev);
app.set('port', process.env.PORT);


var server = http.createServer(app);
server.listen(process.env.PORT);
console.log('im listening');
