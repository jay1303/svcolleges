class feedbackServices {


    feedbackSubmit = async(rollNo, name, semester, feedbackId, branch, subject1values, subject2values, subject3values, subject4values, subject5values, subject6values) => {

        return new Promise((resolve, reject) => {
            db.collection(branch + '_feedbackData').findOne({ $and: [{ rollNo: rollNo }, { feedbackId: feedbackId }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result === null) {

                            var d = new Date();

                            var date = d.getDate();
                            var month = d.getMonth() + 1;
                            var year = d.getFullYear();
                            feedbackId = String(month) + year;

                            let data = {
                                name: name,
                                rollNo: rollNo,
                                semester: semester,
                                branch: branch,
                                feedbackId: feedbackId,
                                subject1values: subject1values,
                                subject2values: subject2values,
                                subject3values: subject3values,
                                subject4values: subject4values,
                                subject5values: subject5values,
                                subject6values: subject6values
                            }

                            db.collection(branch + '_feedbackData').insertOne(data, (err, result) => {
                                if (err) {
                                    throw err;
                                } else {

                                    global.resultData = {
                                        name: name,
                                        branch: branch,
                                        rollNo: rollNo,
                                        semester: semester,
                                        message: "Feedback Successfull",
                                        subject1: subject1values.subject,
                                        subject2: subject1values.subject,
                                        subject3: subject1values.subject,
                                        subject4: subject1values.subject,
                                        subject5: subject1values.subject,
                                        subject6: subject1values.subject,
                                    }

                                    return resolve({ message: "Insertion successfull", data: result.ops });
                                }
                            })
                        } else {
                            global.resultData = {
                                name: name,
                                branch: branch,
                                rollNo: rollNo,
                                semester: semester,
                                message: "Already Submitted",
                                subject1: subject1values.subject,
                                subject2: subject1values.subject,
                                subject3: subject1values.subject,
                                subject4: subject1values.subject,
                                subject5: subject1values.subject,
                                subject6: subject1values.subject,
                            }
                            return reject({ message: "User Already submitted feedback with rollNo " + rollNo, error: "" });
                        }
                    }
                } catch (err) {
                    console.log(err)
                    return reject({ message: "Error While Registering data", error: "" });
                }

            })

        });


    }

}


let feedbackService = new feedbackServices();

module.exports = feedbackService;