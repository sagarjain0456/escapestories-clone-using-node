const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

<<<<<<< HEAD
// const strava = require('strava-v3');
=======

>>>>>>> 61f411ee875997b2b5efed7d5e1155bd9c072cd4

// const payload = strava.activities.get({'access_token':'825adde512a3db4af27d97f0e20f58135220a01f'}).then(console.log);
// const payload = strava.atheletes.get({'access_token':'825adde512a3db4af27d97f0e20f58135220a01f'}).then(console.log);

// const strava = require('strava-v3')
// strava.config({
//   "access_token"  : "825adde512a3db4af27d97f0e20f58135220a01f",
//   "client_id"     : "90071",
//   "client_secret" : "bfd6a6aab940f7e966af0915034dffb9fcfeae44 ",
//   "redirect_uri"  : "https://peaceful-dawn-18754.herokuapp.com/",
// });
// const payload =  strava.athlete.get({})
// console.log(payload)

// var strava = require('strava-v3');
// strava.athletes.get({id:90071},function(err,payload,limits) {
//   console.log(err);
//     //do something with your payload, track rate limits
// });



mongoose.connect("mongodb+srv://admin-sagar:Codinginfo888@escapestories-1st-clust.mtdsd.mongodb.net/bookingsDatabase", { useNewUrlParser: true  }, (err) => {
  if(!err) {console.log('MongoDB Connection Succeeded.')}
  else{console.log('Error in DB cnnection: ' + err)}
});



const bookingSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  address: String,
  pincode: Number,
  city: String,
  state: String
});


//
// const accessTokenSchema = mongoose.Schema({
//   accessToken: Object
// });
//
// const accessTokenModel = mongoose.model("accesstokenCollection", accessTokenSchema);// collection name, schema name






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
  // const accesstoken = (req.query);
  //
  // const newAccessToken = new accessTokenModel({
  //   accessToken: accesstoken,
  // });
  //
  //
  // newAccessToken.save(function(err) {
  //   console.log(newAccessToken.save);
  //   if (err) {
  //     console.log(err);
  //   }
  // });
});



// const payload = strava.activities.get({'access_token':'newAccessToken.code'}).then(console.log);



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

app.post("/", async (req, res) =>{
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
    console.log(newBooking.save);
    if (err) {
      console.log(err);
    } else {
      res.sendFile(__dirname + "/aftersubmit.html");
    }
  });
})





app.listen(process.env.PORT || 4000, function() {
console.log("Server started on port 4000");
});
