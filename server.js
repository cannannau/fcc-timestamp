// server.js
// where your node app starts

// init project
var express = require('express');
var strftime = require('strftime');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:query", function (request, response) {
  var date = new Date(+request.params.query || request.params.query),
      time = date.getTime();
      
  response.send({
    unix: time,
    natural: time && strftime('%B %d, %Y', date)
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
