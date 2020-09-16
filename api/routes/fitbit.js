const express = require('express');
const router = express.Router();

var mysql = require("mysql");

// config for your database
var con = mysql.createConnection({
    user: 'bfd9884b2bf426',
    password: '789f2ecb',
    host: 'us-cdbr-east-02.cleardb.com', 
    // database: 'us-cdbr-east-02.cleardb.com/' 
});

router.post('/accel', (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO heroku_5785e0fa76e8d8b.accel (accel_time, accel_json, accel_x, accel_y, accel_z, accel_sum) VALUES ?";
        var values = [[req.query.time, req.query.json, req.query.x, req.query.y, req.query.z, req.query.sum]];
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
        var sql = "INSERT INTO heroku_5785e0fa76e8d8b.gyro (gyro_time, gyro_json, gyro_x, gyro_y, gyro_z, gyro_sum) VALUES ?";
        var values = [[req.query.time, req.query.json, req.query.x, req.query.y, req.query.z, req.query.sum]];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
          });
      });
});

module.exports = router;