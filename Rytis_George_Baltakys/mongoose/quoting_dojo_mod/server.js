var express = require("express")
var path = require("path")
var app = express()
var bodyParser = require('body-parser')
var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/quoting_dojo')
// Use native promises to solve mongoose deprication problem
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
	likes: Number
}, {timestamps: true})

mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

var routes_setter = require('./server/config/routes.js')
routes_setter(app)

app.listen(5000, function() {
	console.log("listening on port 5000");
})