const router = require('express').Router();

const authServices = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');

// Home
router.get('/', (req, res) => {
    res.send('Auth Controller');
});

// Register
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res, next) => {

        const { username, password, repeatPassword } = req.body;

        if (password != repeatPassword) {

            return res.render('register', { error: { message: 'Passwords should match!' }});
        }

        authServices.register(username, password)
            .then(createdUser => {
                res.redirect('/auth/login');
            })
            .catch(next)
});

// Login
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    authServices.login(username, password)
        .then(token => {
            res.cookie(COOKIE_NAME, token, { httpOnly: true }); // save token as a cookie
            res.redirect('/'); // redirect to home
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
});

// Logout
router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/'); // redirect to home
});

module.exports = router;