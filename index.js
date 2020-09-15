console.log("test")

var mysql = require('mysql');

var con = mysql.createConnection({
  host = "us-cdbr-east-02.cleardb.com",
  user = "b2c53c3f94729e",
  password = "ed90f947",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });