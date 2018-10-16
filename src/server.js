//create http
const http = require('http');


//import app to server
const app = require('./backend/app');


//intialize port
const port = process.env.PORT || 3000;



//set app port
app.set('port',port);


//create server app
const server = http.createServer(app);
server.listen(port);