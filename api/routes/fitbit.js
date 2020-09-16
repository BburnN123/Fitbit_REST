const express = require('express');
const router = express.Router();

var filestream = require('fs');
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

// var mysql = require("mysql");

// // config for your database
// var con = mysql.createConnection({
//     user: 'bfd9884b2bf426',
//     password: '789f2ecb',
//     host: 'us-cdbr-east-02.cleardb.com', 
//     // database: 'us-cdbr-east-02.cleardb.com/' 
// });

var today = new Date();  
var date = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate();
var filename = "test_" + date + ".csv";
var newLine= "\r\n";

router.get('/accel', (req, res, next) => {
    var arr_dict =
        {
            'time': req.query.time,
            'x': req.query.x,
            'y': req.query.y,
            'z': req.query.z
        }

    if (!filestream.existsSync(filename)) {
        writer = csvWriter({sendHeaders: false});
        writer.pipe(filestream.createWriteStream(filename));
        writer.write({
            header1: "time",
            header2: "x",
            header3: "y",
            header4: "z"
        });
        writer.write({
            header1: req.query.time,
            header2: req.query.x,
            header3: req.query.y,
            header4: req.query.z
        });
        writer.end();
        console.log("Added!")
    } 
    else{
        writer = csvWriter({sendHeaders: false});
        writer.pipe(filestream.createWriteStream(filename, {flags: 'a'}));
        writer.write({
            header1: req.query.time,
            header2: req.query.x,
            header3: req.query.y,
            header4: req.query.z
        });
        writer.end();
        console.log("Appended!")
    }

    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO heroku_5785e0fa76e8d8b.accel (accel_time, accel_json, accel_x, accel_y, accel_z, accel_sum) VALUES ?";
    //     var values = [[req.query.time, req.query.json, req.query.x, req.query.y, req.query.z, req.query.sum]];
    //     con.query(sql, [values], function (err, result) {
    //         if (err) throw err;
    //         console.log("Number of records inserted: " + result.affectedRows);
    //       });
    //   });
});

router.post('/gyro', (req, res, next) => {
    var arr_dict =
    {
        'time': req.query.time,
        'x': req.query.x,
        'y': req.query.y,
        'z': req.query.z
    }

if (!filestream.existsSync(filename)) {
    writer = csvWriter({sendHeaders: false});
    writer.pipe(filestream.createWriteStream(filename));
    writer.write({
        header1: "time",
        header2: "x",
        header3: "y",
        header4: "z"
    });
    writer.write({
        header1: req.query.time,
        header2: req.query.x,
        header3: req.query.y,
        header4: req.query.z
    });
    writer.end();
    console.log("Added!")
} 
else{
    writer = csvWriter({sendHeaders: false});
    writer.pipe(filestream.createWriteStream(filename, {flags: 'a'}));
    writer.write({
        header1: req.query.time,
        header2: req.query.x,
        header3: req.query.y,
        header4: req.query.z
    });
    writer.end();
    console.log("Appended!")
}
    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO heroku_5785e0fa76e8d8b.gyro (gyro_time, gyro_json, gyro_x, gyro_y, gyro_z, gyro_sum) VALUES ?";
    //     var values = [[req.query.time, req.query.json, req.query.x, req.query.y, req.query.z, req.query.sum]];
    //     con.query(sql, [values], function (err, result) {
    //         if (err) throw err;
    //         console.log("Number of records inserted: " + result.affectedRows);
    //       });
    //   });
});

module.exports = router;