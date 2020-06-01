class reportsServices {


    reports = async(branch, semester, subject, feedbackId, adminId, name) => {

        return new Promise((resolve, reject) => {
            console.log("failed1")
            db.collection(branch + '_feedbackData').find({ $and: [{ feedbackId: feedbackId }, { semester: semester }] }).toArray((err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        console.log(result.length, "fal")
                        if (result.length !== 0) {


                            console.log(result, "okokokokokok")
                            let values = [];

                            for (let i = 0; i < result.length; i++) {
                                if (result[i].subject1values.subject == subject) {
                                    values[i] = result[i].subject1values.values;

                                } else if (result[i].subject2values.subject == subject) {
                                    values[i] = result[i].subject1values.values;

                                } else if (result[i].subject2values.subject == subject) {
                                    values[i] = result[i].subject1values.values;

                                } else if (result[i].subject2values.subject == subject) {
                                    values[i] = result[i].subject1values.values;

                                } else if (result[i].subject2values.subject == subject) {
                                    values[i] = result[i].subject1values.values;

                                } else if (result[i].subject2values.subject == subject) {
                                    values[i] = result[i].subject1values.values;

                                }

                            }

                            for (let i = 0; i < result.length; i++) {
                                console.log(values[i])

                            }
                            console.log("values services0", values, semester, branch, feedbackId);
                            let skill1value1 = 0,
                                skill1value2 = 0,
                                skill1value3 = 0,
                                skill1value4 = 0,
                                skill1value5 = 0;
                            let skill2value1 = 0,
                                skill2value2 = 0,
                                skill2value3 = 0,
                                skill2value4 = 0,
                                skill2value5 = 0;
                            let skill3value1 = 0,
                                skill3value2 = 0,
                                skill3value3 = 0,
                                skill3value4 = 0,
                                skill3value5 = 0;
                            let skill4value1 = 0,
                                skill4value2 = 0,
                                skill4value3 = 0,
                                skill4value4 = 0,
                                skill4value5 = 0;
                            let skill5value1 = 0,
                                skill5value2 = 0,
                                skill5value3 = 0,
                                skill5value4 = 0,
                                skill5value5 = 0;

                            for (let i = 0; i < result.length; i++) {
                                if (values[i][0] == 5) {
                                    skill1value1 = skill1value1 + 1;
                                } else if (values[i][0] == 4) {
                                    skill1value2 = skill1value2 + 1;
                                } else if (values[i][0] == 3) {
                                    skill1value3 = skill1value3 + 1;
                                } else if (values[i][0] == 2) {
                                    skill1value4 = skill1value4 + 1;
                                } else if (values[i][0] == 1) {
                                    skill1value5 = skill1value5 + 1;
                                }

                            }

                            for (let i = 0; i < result.length; i++) {
                                if (values[i][1] == 5) {
                                    skill2value1 = skill2value1 + 1;
                                } else if (values[i][1] == 4) {
                                    skill2value2 = skill2value2 + 1;
                                } else if (values[i][1] == 3) {
                                    skill2value3 = skill2value3 + 1;
                                } else if (values[i][1] == 2) {
                                    skill2value4 = skill2value4 + 1;
                                } else if (values[i][1] == 1) {
                                    skill2value5 = skill2value5 + 1;
                                }

                            }
                            for (let i = 0; i < result.length; i++) {
                                if (values[i][2] == 5) {
                                    skill3value1 = skill3value1 + 1;
                                } else if (values[i][2] == 4) {
                                    skill3value2 = skill3value2 + 1;
                                } else if (values[i][2] == 3) {
                                    skill3value3 = skill3value3 + 1;
                                } else if (values[i][2] == 2) {
                                    skill3value4 = skill3value4 + 1;
                                } else if (values[i][2] == 1) {
                                    skill3value5 = skill3value5 + 1;
                                }

                            }
                            for (let i = 0; i < result.length; i++) {
                                if (values[i][3] == 5) {
                                    skill4value1 = skill4value1 + 1;
                                } else if (values[i][3] == 4) {
                                    skill4value2 = skill4value2 + 1;
                                } else if (values[i][3] == 3) {
                                    skill4value3 = skill4value3 + 1;
                                } else if (values[i][3] == 2) {
                                    skill4value4 = skill4value4 + 1;
                                } else if (values[i][3] == 1) {
                                    skill4value5 = skill4value5 + 1;
                                }

                            }
                            for (let i = 0; i < result.length; i++) {
                                if (values[i][4] == 5) {
                                    skill5value1 = skill5value1 + 1;
                                } else if (values[i][4] == 4) {
                                    skill5value2 = skill5value2 + 1;
                                } else if (values[i][4] == 3) {
                                    skill5value3 = skill5value3 + 1;
                                } else if (values[i][4] == 2) {
                                    skill5value4 = skill5value4 + 1;
                                } else if (values[i][4] == 1) {
                                    skill5value5 = skill5value5 + 1;
                                }

                            }
                            console.log("failed")
                            global.resultData = {

                                adminId: adminId,
                                name: result.name,
                                message: "report generated successfully",
                                skill1value1: skill1value1,
                                skill1value2: skill1value2,
                                skill1value3: skill1value3,
                                skill1value4: skill1value4,
                                skill1value5: skill1value5,

                                skill2value1: skill2value1,
                                skill2value2: skill2value2,
                                skill2value3: skill2value3,
                                skill2value4: skill2value4,
                                skill2value5: skill2value5,

                                skill3value1: skill3value1,
                                skill3value2: skill3value2,
                                skill3value3: skill3value3,
                                skill3value4: skill3value4,
                                skill3value5: skill3value5,

                                skill4value1: skill4value1,
                                skill4value2: skill4value2,
                                skill4value3: skill4value3,
                                skill4value4: skill4value4,
                                skill4value5: skill4value5,

                                skill5value1: skill5value1,
                                skill5value2: skill5value2,
                                skill5value3: skill5value3,
                                skill5value4: skill5value4,
                                skill5value5: skill5value5,


                            }

                            return resolve({ message: "Successfull", data: "" });

                        } else {
                            console.log("else part")
                            global.resultData = {
                                adminId: adminId,
                                name: result.name,
                                message: "Failed While generating report",
                                skill1value1: "1",
                                skill1value2: "13",
                                skill1value3: "1",
                                skill1value4: "31",
                                skill1value5: "1",

                                skill2value1: "1",
                                skill2value2: "13",
                                skill2value3: "1",
                                skill2value4: "1",
                                skill2value5: "31",

                                skill3value1: "1",
                                skill3value2: "1",
                                skill3value3: "31",
                                skill3value4: "1",
                                skill3value5: "1",

                                skill4value1: "1",
                                skill4value2: "1",
                                skill4value3: "1",
                                skill4value4: "1",
                                skill4value5: "1",

                                skill5value1: "1",
                                skill5value2: "1",
                                skill5value3: "1",
                                skill5value4: "1",
                                skill5value5: "1",

                            }
                            return resolve({ message: "Successfull", data: "" });

                        }

                    }
                } catch (err) {
                    console.log(err, "error papa")
                    global.resultData = {
                        adminId: adminId,
                        name: result.name,
                        message: "Failed While generating report",
                        skill1value1: "1",
                        skill1value2: "13",
                        skill1value3: "1",
                        skill1value4: "31",
                        skill1value5: "1",

                        skill2value1: "1",
                        skill2value2: "13",
                        skill2value3: "1",
                        skill2value4: "1",
                        skill2value5: "31",

                        skill3value1: "1",
                        skill3value2: "1",
                        skill3value3: "31",
                        skill3value4: "1",
                        skill3value5: "1",

                        skill4value1: "1",
                        skill4value2: "1",
                        skill4value3: "1",
                        skill4value4: "1",
                        skill4value5: "1",

                        skill5value1: "1",
                        skill5value2: "1",
                        skill5value3: "1",
                        skill5value4: "1",
                        skill5value5: "1",

                    }

                    return reject({ message: "Details Not found", error: "" });
                }

            })

        });


    }

}


let reportsService = new reportsServices();

module.exports = reportsService;