var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

mongoose.connect('mongodb://localhost/mongoose_dashboard');

// Use native promises to solve mongoose deprication problem
mongoose.Promise = global.Promise;

var MongooseSchema = new mongoose.Schema({
	name: String,
	age: Number,
	meal: String
})
// var MongooseSchema = new mongoose.Schema({
//     name: {type: String, required: true, minlength: 3},
//     age: {type: Number, required: true, min: 1, max: 100}
// })

mongoose.model("MongooseSchema", MongooseSchema);
var MongooseModel = mongoose.model("MongooseSchema")

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

// The root route - we want to get all of the user from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
	MongooseModel.find({}, function(err, mongoose_critters){
		console.log(mongoose_critters);
		res.render("index", {mongoose_critters:mongoose_critters});
	})
})

app.post('/mongooses', function(req, res) {
	console.log("POST DATA", req.body);
	var mongoose_critter = new MongooseModel({name: req.body.name, age: req.body.age, meal: req.body.meal});
	mongoose_critter.save(function(err){
		if(err){
			console.log("something went wrong");
			// validation in case there is an error with the save to the database
			res.render('new', {title: "You have errors!", errors: mongoose_critter.errors})
		} else {
			// else console.log that we did well and then redirect to the root route
			console.log("successfully added a mongoose critter!");
			res.redirect('/');
		}
	})
})

app.get('/mongooses/new', function(req, res) {
	res.render('new');
})

app.get('/mongooses/edit/:id', function(req, res) {
	MongooseModel.findOne({_id: req.params.id}, function(err, mongoose_critter) {
		if(err){
			console.log("something went wrong");
			res.redirect('/');
		} else {
			console.log(mongoose_critter)
			res.render('edit', {mongoose_critter: mongoose_critter});
		}
	})
})

app.post('/mongooses/:id', function(req, res) {
	MongooseModel.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, meal: req.body.meal}, function(err){
		res.redirect('/');
	})
})

app.get('/mongooses/destroy/:id', function(req, res) {
	MongooseModel.remove({_id: req.params.id}, function(err){
		if(err){
			console.log("something went wrong");
			res.redirect('/');
		} else {
			res.redirect('/');
		}
	})
})

app.listen(5000, function() {
	console.log("listening on port 5000");
})