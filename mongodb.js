var dbUrl = "BWhite:Tracy@staff.mongohq.com:10084/EasyDb";
var collections = ["People"];
var db = require("mongo.js").connect(dbUrl, collections);
db.users.find({gender: "female"}, function(err, users) {
    if( err || !users) console.log("No femail users found");
    else users.forEach( function(femaleUser) {
        console.log(femaleUser);
    } );
   } );
    