let sha1 = require('sha1');
class userLoginServices {


    userLogin = async(branch, rollNo, password, semester) => {

        return new Promise((resolve, reject) => {


            let password_encrypt = sha1(password);

            db.collection(branch + '_userDetails').findOne({ $and: [{ rollNo: rollNo }, { password: password_encrypt }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result !== null) {
                            console.log(semester)

                            db.collection(branch + "_subjects").findOne({ semester: semester }, (err, subResult) => {

                                global.resultData = {
                                    name: result.name,
                                    branch: branch,
                                    rollNo: rollNo,
                                    semester: semester,
                                    message: "Welcome to " + result.name,
                                    subject1: subResult.subject1,
                                    subject2: subResult.subject2,
                                    subject3: subResult.subject3,
                                    subject4: subResult.subject4,
                                    subject5: subResult.subject5,
                                    subject6: subResult.subject6,
                                }

                            })

                            db.collection(branch + '_userDetails').updateOne({ rollNo: rollNo }, { $set: { accountStatus: "active" } }, (err, updateresult) => {

                                if (updateresult.result.nModified == 0) {

                                    return reject({ message: "" + rollNo, error: "" });
                                }

                            });
                            loggedIn = true;
                            return resolve({ message: "Login Successfull", data: "" });
                        } else {
                            return reject({ message: "login Failure : Invalid credentials" + rollNo, error: "" });
                        }
                    }
                } catch (err) {
                    return reject({ message: "User Details Not found", error: "" });
                }

            })

        });


    }

}


let userLoginService = new userLoginServices();

module.exports = userLoginService;