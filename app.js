const express = require('express');
const app = express();

const fitbitRoutes = require('./api/routes/fitbit');

//URL start with /fitbit
app.use('/fitbit', fitbitRoutes);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "It works!"
//     });
// });

module.exports = app;