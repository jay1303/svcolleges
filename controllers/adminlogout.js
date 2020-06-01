const express = require('express');
const router = express.Router();
const adminlogoutServices = require('../services/adminlogoutServices');
class adminlogoutController {

    logout = async(req, res) => {
        let branch = req.body.branch;
        let rollNo = req.body.rollNo;
        global.res = res;
        try {
            let result = await adminlogoutServices.logout(branch, rollNo);

            if (result) {
                res.redirect('/adminlogin');
                // return response.done(result.message, result.data);
            }

        } catch (e) {
            res.redirect('/adminlogin');
        }
    }
}


module.exports = adminlogoutController;