var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function (req, res){

	res.render('index')
})

app.post('/process', function (req, res){
	console.log("POST DATA \n\n", req.body)

	res.render('users', {user: req.body})
})

app.listen(8000, function() {
	console.log("listening on port 8000")
})