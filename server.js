// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:data", (req, res)=>{
  let date = new Date(req.params.data);
  let natural;
  let unix;
  
  if(!Number(req.params.data)){
    natural = date.toDateString();
    unix = date.valueOf();
  } else if (Number(req.params.data)){
    natural = new Date(Number(req.params.data));
    unix = req.params.data;
  }
  
  res.json({natural, unix})
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
