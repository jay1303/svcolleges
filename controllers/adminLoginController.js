const express = require('express');
const router = express.Router();
const adminLoginServices = require('../services/adminLoginServices');
class adminLoginController {

    adminLoginForm = async(req, res) => {

        let adminId = req.body.adminId;
        let password = req.body.password;
        global.res = res;

        try {
            let result = await adminLoginServices.adminLogin(adminId, password);

            if (result) {
                // return response.done(result.message, result.data);
                console.log("admin Login ")
                res.redirect('/admindashboard');
            }

        } catch (e) {
            res.redirect('/adminlogin');
        }
    }
}


module.exports = adminLoginController;