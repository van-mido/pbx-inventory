const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const router = require('./routes/pbxInventory');

app.use(loggingApp);

app.use(express.json());

// DB connection

mongoose.connect(process.env.MONGO_URI);

db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.get('/', (req, res) => {

    console.log(req.body);
    res.send('<h1>PBX Inventory</h1>');

});

app.get('/users', userAuth, (req, res) => {

    res.send('<h2>User Dashboard</h2>');

});

app.use('/pbxinventory/api', router);

// Middleware log
function loggingApp(req, res, next) {

    console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
    next();
}

// Middleware auth
function userAuth(req, res, next) {


    if (req.query.admin === 'okey') {

        next();

    } else {

        res.send('ERROR: Permission denied'); 
    }
}

app.listen(PORT, () => console.log(`Server connected by port: ${PORT}`));