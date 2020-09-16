const express = require('express');
const app = express();

//Create the route
const fitbitRoutes = require('./api/routes/fitbit');

//Create the route to api
app.use('/fitbit', fitbitRoutes)

module.exports = app;