const http = require('http')
const app = require('./app')

//  Host the port
const port = process.env.port || 3000;

//Returning the server 
const server = http.createServer(app)

server.listen(port);