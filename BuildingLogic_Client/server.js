const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var search = require('./api/search');

var save =  require('./api/save');

var edit =  require('./api/edit');

var remove = require('./api/delete');

var get =  require('./api/get');


var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mean', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/search', search);

app.use('/save', save);

app.use('/edit', edit);

app.use('/delete', remove);

app.use('/get', get);

// Send all other requests to the Angular app
app.get('*',function (req, res) {
//  res.redirect('/');
res.sendFile(path.join(__dirname,'dist/index.html'));
});

//error handling
// app.use(function(err,req,res,next){
//  res.send(err);
//   });

//Set Port
const port = process.env.PORT || '8000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));