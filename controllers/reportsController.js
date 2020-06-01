const express = require('express');
const router = express.Router();
const reportsServices = require('../services/reportsServices');
class reportsController {

    reports = async(req, res) => {

        let branch = req.body.branch;
        let semester = req.body.semester;
        let subject = req.body.subject;
        let feedbackId = req.body.feedbackId;
        let adminId = req.body.adminId;
        let name = req.body.name;

        global.res = res;
        try {
            let result = await reportsServices.reports(branch, semester, subject, feedbackId, adminId, name);

            if (result) {


                res.redirect('/reports');
                // return response.done(result.message, result.data);
            }

        } catch (e) {
            res.redirect('/reports');
        }
    }
}


module.exports = reportsController;