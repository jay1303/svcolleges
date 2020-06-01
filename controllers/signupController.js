const express = require('express');
const router = express.Router();
const signupServices = require('../services/signupServices');
class signupController {

    userSignup = async(req, res) => {

        let name = req.body.name;
        let mailId = req.body.mailId;
        let branch = req.body.branch;
        let rollNo = req.body.rollNo;
        let password = req.body.password;
        let semester = req.body.semester;


        global.res = res;
        try {
            let result = await signupServices.userSignup(name, mailId, branch, rollNo, password, semester);

            if (result) {


                res.redirect('/loginform');
                // return response.done(result.message, result.data);
            }

        } catch (e) {
            res.redirect('/signupform');
        }
    }
}


module.exports = signupController;