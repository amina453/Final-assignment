var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html",200)
})

app.get('/index', function (req, res) {
  res.sendFile(__dirname + "/index.html",200)
})

app.get('/about', function (req, res) {
  res.sendFile(__dirname +"/about.html",200)
})

app.get('/about/team_photo', function (req, res) {
  res.sendFile(__dirname + "/public/teamphoto.jpg",200)
})

app.get('/video', function (req, res) {
 res.redirect(301, 'https://www.youtube.com/watch?v=ACkRcq_d8ys')
})

app.get('*', function(req, res){
  res.sendFile(__dirname +"/error.html", 404);
});

app.listen(3000, 'localhost');