const express = require('express');
const router = express.Router();

var mysql = require("mysql");

// config for your database
var con = mysql.createConnection({
    user: 'b2c53c3f94729e',
    password: 'ed90f947',
    host: 'us-cdbr-east-02.cleardb.com', 
    // database: 'heroku_3dc17b7d0a2d5d3' 
});

router.post('/accel', (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO heroku_3dc17b7d0a2d5d3.accel (acc_time, acc_x, acc_y, acc_z, acc_sum) VALUES ?";
        var values = [[req.query.time, req.query.x, req.query.y, req.query.z, req.query.sum]];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
          });
      });
});

router.post('/gyro', (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO heroku_3dc17b7d0a2d5d3.gyro (gyro_time, gyro_x, gyro_y, gyro_z, gyro_sum) VALUES ?";
        var values = [[req.query.time, req.query.x, req.query.y, req.query.z, req.query.sum]];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
          });
      });
});

module.exports = router;