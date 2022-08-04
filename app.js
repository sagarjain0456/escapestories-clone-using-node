// require('./models/db');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "0680b0cafa9787baa33bb1367007d8e53b887406 "

var api = new StravaApiV3.ActivitiesApi()

var name = name_example; // {String} The name of the activity.

var sportType = sportType_example; // {String} Sport type of activity. For example - Run, MountainBikeRide, Ride, etc.

var startDateLocal = 2022-10-20; // {Date} ISO 8601 formatted date time.

var elapsedTime = 56; // {Integer} In seconds.

var opts = {
  'type': type_example, // {String} Type of activity. For example - Run, Ride etc.
  'description': description_example, // {String} Description of the activity.
  'distance': 3.4, // {Float} In meters.
  'trainer': 56, // {Integer} Set to 1 to mark as a trainer activity.
  'commute': 56, // {Integer} Set to 1 to mark as commute.
  'hideFromHome': true // {Boolean} Set to true to mute activity.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createActivity(name, sportType, startDateLocal, elapsedTime, opts, callback);















const bookingSchema = new mongoose.Schema({
name: String,
email: String,
mobile: Number,
address: String,
pincode: Number,
city: String,
state: String
});



//creating the model
const Booking = mongoose.model("Booking", bookingSchema); // name of the collection, name of the schema

// Now we will create the document using the above model

// const booking = new Booking ({
//   name: "Unique jain",
//   email: "jainunique1@gmail.com",
//   mobile: "9711476776",
//   address: "flat-no:K907, HCBS Sports Ville Apartments, Sohna",
//   pincode: 122103,
//   city: "Gurgaon",
//   state: "Haryana"
// });


// booking.save();




// So in order to insert the new record inside the mongodb, we will call the save function


const app = express();
// app.use("view engine", "ejs");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

  res.sendFile(__dirname +"/index.html");
});


app.get("/bookingform.html", function(req,res){
  res.sendFile(__dirname + "/bookingform.html");
});



app.get("/about.html", function(req,res){
  res.sendFile(__dirname + "/about.html");
});


app.get("/terms.html", function(req,res){
  res.sendFile(__dirname + "/terms.html");
});




app.get("/privacy.html", function(req,res){
  res.sendFile(__dirname + "/privacy.html");
});


app.get("/tips.html", function(req,res){
  res.sendFile(__dirname + "/tips.html");
});



app.get("/gallery.html", function(req,res){
  res.sendFile(__dirname + "/gallery.html");
});




app.get("/register.html", function(req,res){
  res.sendFile(__dirname + "/register.html");
});



app.post("/bookingform.html", function(req,res){

  res.sendFile(__dirname + "/bookingform.html");
});






// app.post("/register.html", function(req,res){
// // console.log(req.body.prizez);
//
//
//
//
// });






app.post("/", function(req,res){

const newBooking = new Booking ({
   name:req.body.fullname,
   email: req.body.email,
   mobile: req.body.mobile,
   address: req.body.address,
   pincode: req.body.pincode,
  city: req.body.city,
 state: req.body.state

});

newBooking.save(function(err){

  if(err){
    console.log(err);
  }

  else{
    res.sendFile(__dirname + "/aftersubmit.html");
  }

});


})





app.listen(process.env.PORT || 4000, function(){

console.log("Server started on port 4000");

});
