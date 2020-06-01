const express = require('express');
const router = express.Router();
const userLoginServices = require('../services/userLoginServices');
class userLoginController {

    userLoginForm = async(req, res) => {

        let branch = req.body.branch;
        let rollNo = req.body.rollNo;
        let password = req.body.password;
        let semester = req.body.semester;
        global.res = res;
        try {
            let result = await userLoginServices.userLogin(branch, rollNo, password, semester);

            if (result) {
                // return response.done(result.message, result.data);

                res.redirect('/feedbackform');
            }

        } catch (e) {
            res.redirect('/loginform');
        }
    }
}


module.exports = userLoginController;