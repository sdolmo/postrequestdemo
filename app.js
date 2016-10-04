var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); //Reserch what urlencoded does in docs and what {extended: true} means

app.set("view engine", "ejs");

var friendsArray = ["Alisha", "Samantha", "H", "Erin", "Sebastian", "Alicia"];


app.get("/", function(req, res){
  res.render("home");
});

app.get("/friends", function(req, res){
  res.render("friends", {friends: friendsArray});
});

app.post("/addfriend", function(req, res){
  var newFriend = req.body.newfriend;
  friendsArray.push(newFriend);
  res.redirect("/friends");
});

app.listen(3000, function(){
  console.log("Server Running on 3000!!!");
})
