let sha1 = require('sha1');
class adminLoginServices {


    adminLogin = async(adminId, password) => {

        return new Promise((resolve, reject) => {


            let password_encrypt = sha1(password);


            db.collection('admin_details').findOne({ $and: [{ adminId: adminId }, { password: password }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {

                            let adminData = {
                                adminId: adminId,
                                name: result.name

                            }
                            global.resultData = {
                                adminId: adminId,
                                name: result.name,
                                message: "Welcome to " + result.name,
                                skill1value1: "1",
                                skill1value2: "1",
                                skill1value3: "1",
                                skill1value4: "1",
                                skill1value5: "1",

                                skill2value1: "1",
                                skill2value2: "1",
                                skill2value3: "1",
                                skill2value4: "1",
                                skill2value5: "1",

                                skill3value1: "1",
                                skill3value2: "1",
                                skill3value3: "1",
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
                            loggedIn = true;
                            return resolve({ message: "Login Successfull", data: adminData });
                        } else {
                            return reject({ message: "login Failure : Invalid credentials" + rollNo, error: "" });
                        }
                    }
                } catch (err) {
                    return reject({ message: "admin Details Not found", error: "" });
                }

            })

        });


    }

}


let adminLoginService = new adminLoginServices();

module.exports = adminLoginService;