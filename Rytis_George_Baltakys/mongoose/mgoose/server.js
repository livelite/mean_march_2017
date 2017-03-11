var express = require("express");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

// Use native promises to solve mongoose deprication problem
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, min: 1, max: 100},
})
// var UserSchema = new mongoose.Schema({
//  name: String,
//  age: Number
// })

mongoose.model("User", UserSchema); // We are setting this Schema in our Models as "User"
var User = mongoose.model("User") // We are retrieving this Schema from our Models, named "User"

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

// The root route - we want to get all of the user from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
    User.find({}, function(err, users){
        // This is the method that finds all of the users from the database
        // Notice how the first parameter id the options for what to find and the second is the
        // callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        // happen inside of this callback function for it to be synchronous
        // Make sure you handle the case when there is an error. as well as the case when there is no error
        console.log(users);
        res.render("index", {users:users});
    })
})

// This is the route that we already have in our server.js
// When the user presses the submit button on index.ejs it should send a post request to "/users"
// In this route we should add the user to the database and then redirect to the root route (index view)
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // Create a new user with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation
    user.save(function(err){
        // if there is any error console.log that something went wrong
        if(err){
            console.log("something went wrong");
            // validation in case there is an error with the save to the database
            res.render("index", {title: "You have errors!", errors: user.errors})
        } else {
            // else console.log that we did well and then redirect to the root route
            console.log("successfully added a user!");
            res.redirect('/');
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})