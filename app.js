// require('./models/db');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/bookingsDatabase", { useNewUrlParser: true  }, (err) => {
  if(!err) {console.log('MongoDB Connection Succeeded.')}
  else{console.log('Error in DB cnnection: ' + err)}
});


const bookingSchema = new mongoose.Schema({
name: String,
email: String,
mobile: Number,
address: String,
pincode: Number,
city: String,
state: String
});


const Booking = mongoose.model("Booking", bookingSchema); // name of the collection, name of the schema

// Now we will create the document using the above model

const booking = new Booking ({
  name: "Unique jain",
  email: "jainunique1@gmail.com",
  mobile: "9711476776",
  address: "flat-no:K907, HCBS Sports Ville Apartments, Sohna",
  pincode: 122103,
  city: "Gurgaon",
  state: "Haryana"
});


booking.save();




// So in order to insert the new record inside the mongodb, we will call the save function


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req,res){
  res.sendfile(__dirname +"/index.html");
});


app.get("/bookingform.html", function(req,res){
  res.sendfile(__dirname + "/bookingform.html");
});


app.post("/", function(req,res){
var name = req.body.fullname;
var email = req.body.email;
var mobile = req.body.mobile;
var address = req.body.address;
var pincode = req.body.pincode;
var city = req.body.city;
var state= req.body.state;
console.log(name);
console.log(email);
console.log(mobile);
console.log(address);
console.log(pincode);
console.log(city);
console.log(state);

})





app.listen(3000, function(){

console.log("Server started on port 3000");

});
