const express = require('express');
const router = express.Router();
const addSubjectsServices = require('../services/addSubjectsServices');
class addSubjectsController {

    addSubjects = async(req, res) => {

        let branch = req.body.branch;
        let semester = req.body.semester;
        let adminId = req.body.adminId;
        let subject1 = req.body.subject1;
        let subject2 = req.body.subject2;
        let subject3 = req.body.subject3;
        let subject4 = req.body.subject4;
        let subject5 = req.body.subject5;
        let subject6 = req.body.subject6;


        global.res = res;
        try {
            let result = await addSubjectsServices.addSubjects(adminId, branch, semester, subject1, subject2, subject3, subject4, subject5, subject6);

            if (result) {
                console.log("admin success")

                res.redirect('/admindashboard');
                // return response.done(result.message, result.data);
            }

        } catch (e) {
            console.log("admin failure")
            res.redirect('/admindashboard');
        }
    }
}


module.exports = addSubjectsController;