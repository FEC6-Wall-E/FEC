require("dotenv").config();

const express = require('express');
const morgan = require('morgan');
const router = require('./router.js')

const app = express();
const port = process.env.PORT;

//MIDDLE WARE
app.use(morgan('dev'));
app.use('/', router);
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist')); // SERVE CLIENT FILES

app.listen(port);
console.log(`LISTENING AT PORT: ${port}`);