var express = require('express');
var app = express();



var bodyParser = require('body-parser');  
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());  


 app.get('/api/flytta', function(req, res) {

       
res.sendFile( __dirname + '/public/success.html');
    });
	
app.get('/public/success',function(req,res) {
res.sendFile( __dirname + '/public/success.html');
});

app.get('*',function(req,res){
	   res.sendFile( __dirname + '/public/index.html');
	});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});