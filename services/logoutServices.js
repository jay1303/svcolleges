class userlogoutServices {


    logout = async(branch, rollNo) => {

        return new Promise((resolve, reject) => {
            db.collection(branch + '_userDetails').updateOne({ rollNo: rollNo }, { $set: { accountStatus: "inactive" } }, (err, updateRes) => {
                try {
                    if (updateRes.result.nModified > 0) {
                        loggedIn = false;
                        return resolve({ message: "logout Successfull", data: "" });
                    } else {
                        throw err;
                    }
                } catch (err) {
                    return reject({ message: "" + rollNo, error: "" })
                }

            });
        });


    }

}


let userlogoutService = new userlogoutServices();

module.exports = userlogoutService;