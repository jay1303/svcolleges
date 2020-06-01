const express = require('express');
const router = express.Router();
global.express = express;
global.router = router;
const dbConfig = require('../config/dbConfig.js');

const signupController = require('../controllers/signupController');
const feedbackController = require('../controllers/feedbackController');
const userLoginController = require('../controllers/userLoginController');
const logoutController = require('../controllers/logoutController');
const adminLoginController = require('../controllers/adminLoginController');
const addSubjectsController = require('../controllers/addSubjectsController');
const reportsController = require('../controllers/reportsController');


const adminlogoutController = require('../controllers/adminlogout');
let signup = new signupController();
let userLogout = new logoutController();
let feedback = new feedbackController();
let userLogin = new userLoginController();
let adminlogout = new adminlogoutController();
let reportsGenerate = new reportsController();

let addSubjects = new addSubjectsController();

let adminLogin = new adminLoginController();

router.post('/user/signUp', signup.userSignup);
router.post('/user/submitform', feedback.feedbackData);
router.post('/user/login', userLogin.userLoginForm);
router.post('/admin/reports', reportsGenerate.reports);
router.post('/admin/addsubjects', addSubjects.addSubjects)

router.post('/admin/login', adminLogin.adminLoginForm);
router.post('/user/logout', userLogout.logout);

router.get('/admin/logout', adminlogout.logout);



module.exports = router;