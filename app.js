/*
 *  HOMEWORK NO:    1
 *  AUTHOR:         Sandro Kallinger
*/
const express = require('express');
const app = express();

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

// importing routes
const studentsRoute = require('./api/routes/students');
const coursesRoute = require('./api/routes/courses'); 
const coursegradesRoute = require('./api/routes/coursegrades'); 

/* MY ROUTES: 
   requests are sent to /xyz, handled in each js-file
   so we don't have to handle everything in this one file */
app.use('/students', studentsRoute);
app.use('/courses', coursesRoute);
app.use('/students', coursegradesRoute);

/* TEST: this would handle every type of request
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    }); // 200 for "it works" as json-Response with correct headers etc.
});
*/

module.exports = app; 