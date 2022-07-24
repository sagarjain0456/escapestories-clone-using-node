const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.get("/", function (req,res){

  res.sendfile(__dirname +"/index.html");
  // res.write(__dirname + "/style.css");
  // res.sendfile();


  // res.sendfile("index.html");


});


app.listen(3000, function(){

console.log("Server started on port 3000");

});
