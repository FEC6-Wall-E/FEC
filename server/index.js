const app = require('express');
const morgan = require('morgan');

app.use(morgan('dev'));