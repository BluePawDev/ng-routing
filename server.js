var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.resolve('public/views/index.html'));

});

app.listen(process.env.PORT || 3000);
