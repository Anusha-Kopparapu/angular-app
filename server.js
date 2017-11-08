var port = process.env.PORT || 8080;
var connect = require('connect');
var serveStatic = require('serve-static');
// var cors = require('cors');
// var express =require('express');
// var app = express();
// // use it before all route definitions
// app.use(cors({origin: '*'}));
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on 8080...');
});
