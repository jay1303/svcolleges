const express = require('express');
const router = express.Router();
const feedbackServices = require('../services/feedbackServices');
class feedbackController {

    feedbackData = async(req, res) => {

        let rollNo = req.body.rollNo;
        let semester = req.body.semester;
        let feedbackId = 1;
        let name = req.body.name;
        let branch = req.body.branch;


        let subject1 = req.body.subject1;
        let subject2 = req.body.subject2;
        let subject3 = req.body.subject3;
        let subject4 = req.body.subject4;
        let subject5 = req.body.subject5;
        let subject6 = req.body.subject6;

        let subject1values = {
            subject: subject1,
            values: [req.body._11,
                req.body._12,
                req.body._13,
                req.body._14,
                req.body._15
            ]
        }
        let subject2values = {
            subject: subject2,
            values: [req.body._21,
                req.body._22,
                req.body._23,
                req.body._24,
                req.body._25
            ]
        }
        let subject3values = {
            subject: subject3,
            values: [req.body._31,
                req.body._32,
                req.body._33,
                req.body._34,
                req.body._35
            ]
        }
        let subject4values = {
            subject: subject4,
            values: [req.body._41,
                req.body._42,
                req.body._43,
                req.body._44,
                req.body._45
            ]
        }
        let subject5values = {
            subject: subject5,
            values: [req.body._51,
                req.body._52,
                req.body._53,
                req.body._54,
                req.body._55
            ]
        }
        let subject6values = {
            subject: subject6,
            values: [req.body._61,
                req.body._62,
                req.body._63,
                req.body._64,
                req.body._65
            ]
        }

        global.res = res;
        try {


            let result = await feedbackServices.feedbackSubmit(rollNo, name, semester, feedbackId, branch, subject1values, subject2values, subject3values, subject4values, subject5values, subject6values);

            if (result) {

                res.redirect('/formresponse');
                // return response.done(result.message, result.data);
            }

        } catch (e) {
            res.redirect('/formresponse');
        }
    }
}


module.exports = feedbackController;