const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/routes');
const logger = require('./logger/logger.js');
const response = require('./responses/response');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/feedback', router);

global.loggedIn = false;

app.set('view engine', 'ejs');

global.response = response;

app.use(express.static(__dirname + '/public'));

app.get('/signupform', (req, res) => {
    res.render("signupform");
})
app.get('/', (req, res) => {
    res.render("loginForm");
})

app.get('/loginform', (req, res) => {
    res.render("loginForm");
})

app.get('/feedbackform', (req, res) => {

    if (loggedIn) {
        res.render("feedbackform", resultData);
    } else {
        res.redirect('/loginform');
    }

})

app.get('/formresponse', (req, res) => {
    if (loggedIn) {
        res.render("feedbackform", resultData);
    } else {
        res.redirect('/loginform');
    }
});

app.get('/adminlogin', (req, res) => {
    try {
        res.render("adminlogin");
    } catch (err) {
        console.log(err)
        res.render("adminlogin");
    }

});

app.get('/admindashboard', (req, res) => {
    try {
        res.render("admindashboard", resultData);
    } catch (err) {
        res.render("adminlogin");
    }

});

app.get('/reports', (req, res) => {
    try {
        res.render("admindashboard", resultData);
    } catch (err) {
        res.render("adminlogin");
    }
});

app.listen(process.env.PORT || 3000, () => {
    wLogger.info(`Server Listening at port `);
})