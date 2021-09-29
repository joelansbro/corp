var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('index', {title: 'Corp - Main'});
});

app.get('/article', function(req,res){
    res.render('article', {title: 'Corp - Article'});
});

app.listen(8080);
console.log('Server is listening on 8080');