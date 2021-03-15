const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');

const auth = require('../middlewares/auth');

module.exports = function (app) {

    app.engine('hbs', hbs({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    
    app.use('/static', express.static('public')); // everything gets forwarded to that folder

    app.use(express.urlencoded({extended: true})); // allows the parsing of form data - it's like body-parser

    app.use(cookieParser());

    app.use(auth);
};