const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));
const {animals} = require('./data/animals.json');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})