/* Start of the app and server*/

const http = require('http');
const app = require('./app');
// Declare a port using environment or specific
const port = process.env.PORT || 4000;
// Create a server
const server = http.createServer(app);
// Pass the port and display the message
server.listen(port);
