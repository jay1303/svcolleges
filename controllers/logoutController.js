const express = require('express');
const router = express.Router();
const logoutServices = require('../services/logoutServices');
class logoutController {

    logout = async(req, res) => {
        let branch = req.body.branch;
        let rollNo = req.body.rollNo;
        global.res = res;
        try {
            let result = await logoutServices.logout(branch, rollNo);

            if (result) {
                res.redirect('/loginform');
                // return response.done(result.message, result.data);
            }

        } catch (e) {
            return response.error(e.message, e.error);
        }
    }
}


module.exports = logoutController;