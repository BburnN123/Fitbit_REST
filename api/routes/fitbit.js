const express = require('express');
const router = express.Router();

const sql = require("mssql");

// config for your database
const config = {
    user: 'b2c53c3f94729e',
    password: 'ed90f947',
    server: 'us-cdbr-east-02.cleardb.com', 
    database: 'heroku_3dc17b7d0a2d5d3' 
};

router.get('/', (req, res, next) => {
   
});


router.post('/', (req, res, next) => {
    // connect to your database

    sql.connect(config, function (err) {
        
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        
        // query to the database and get the records
        request.query('INSERT INTO heroku_accel3dc17b7d0a2d5d3.accel (acc_time, acc_json) VALUES ("1", "2")', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

module.exports = router;