//Imports express
const express = require('express');

//Imports connection to the database
const sequelize = require('./config/connection');

// Brings in the models -- creates tables 
require('./models'); // this line will no longer be needed after we bring in our models via routes

//Sets up the express app
const app = express();
const PORT = process.env.PORT || 3001;

//connect to the database before starting the express server
sequelize.sync().then(() => {
app.listen(PORT, () => {
        console.log(`The Emperor protects on port ${PORT}`);
    });
});



