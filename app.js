const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
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
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bookingform.html", function(req, res) {
  res.sendFile(__dirname + "/bookingform.html");
});

app.get("/about.html", function(req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/terms.html", function(req, res) {
  res.sendFile(__dirname + "/terms.html");
});

app.get("/privacy.html", function(req, res) {
  res.sendFile(__dirname + "/privacy.html");
});

app.get("/tips.html", function(req, res) {
  res.sendFile(__dirname + "/tips.html");
});

app.get("/gallery.html", function(req, res) {
  res.sendFile(__dirname + "/gallery.html");
});

app.get("/register.html", function(req, res) {
  res.sendFile(__dirname + "/register.html");
});

app.post("/bookingform.html", function(req, res) {

  res.sendFile(__dirname + "/bookingform.html");
});

app.post("/", function(req, res) {
  const newBooking = new Booking({
    name: req.body.fullname,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    pincode: req.body.pincode,
    city: req.body.city,
    state: req.body.state
  });

  newBooking.save(function(err) {
    if (err) {
      // res.status(500).send(err);
      console.log(err);
    } else {
      res.sendFile(__dirname + "/aftersubmit.html");
    }
  });
})

app.listen(process.env.PORT || 4000, function() {
console.log("Server started on port 4000");
});
