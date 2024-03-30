const models = require('../models');
const Account = models.Account;

const loginPage = (req, res) => {
    res.render('login');
};

const signupPage = (req, res) => {
    res.render('signup');
};

const logout = (req, res) => {
    res.redirect('/');
};

const login = (request, response) => {};

const signup = (request, response) => {};

module.exports = {
    loginPage,
    signupPage,
    logout,
    login,
    signup
};