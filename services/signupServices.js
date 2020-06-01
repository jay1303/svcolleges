let sha1 = require('sha1');
class signupServices {


    userSignup = async(name, mailId, branch, rollNo, password, semester) => {

        return new Promise((resolve, reject) => {
            db.collection(branch + '_userDetails').findOne({ rollNo: rollNo }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result === null) {

                            let password_encrypt = sha1(password);
                            let userData = {
                                rollNo: rollNo,
                                mailId: mailId,
                                name: name,
                                accountStatus: "inactive",
                                branch: branch,
                                password: password_encrypt,
                                semester: semester

                            }
                            db.collection(branch + '_userDetails').insertOne(userData, (err, result) => {
                                if (err) {
                                    throw err;
                                } else {
                                    return resolve({ message: "Insertion successfull", data: result.ops });
                                }
                            })
                        } else {
                            return reject({ message: "User Already Exists with rollNo " + rollNo, error: "" });
                        }
                    }
                } catch (err) {
                    return reject({ message: "Error While Registering data", error: "" });
                }

            })

        });


    }

}


let signupService = new signupServices();

module.exports = signupService;