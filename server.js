// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const { db } = require('./db/db.json');
const express = require('express');
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// connect api routes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//make files from public folder static resources
app.use(express.static('public'));

//choose port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});