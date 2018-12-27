var http = require('http');

var app = require('./app');
const port = process.env.port | 8000 ;

app.set('port',port);
const server = http.createServer(app);


server.listen(port,function(){
    console.log(`Server is listening on port ${port}`);
});