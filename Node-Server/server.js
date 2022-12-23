const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');
const path = require('path');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //hosts server on localhost:3000



app.use(express.static('public'));
console.log('Server is running'+PORT);
const io = socket(server);

var count = 0;

var arguments =[];
//Socket.io Connection------------------
io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)
    
   
    socket.on('counter', (args) => {
      count++;
      console.log(count);
      console.log(args);
      args = args.slice(1, -1);
      args = args.split(',');
      let lat = args[0];
      let long = args[1];
      
      list = [lat, long]
      arguments = list;

      console.log("Lat: " + lat + " Long: " + long);
      app.get('/api',function(req, res) {
        res.send(list);
      })
    
     socket.emit('message',args);
    });
        
    })
    
app.get('/api', function (req, res) {
  res.send(list);
});
io.on('disconnect', () => {
  console.log("socket connection"+socket.id + " disconnected"); // undefined
});
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});