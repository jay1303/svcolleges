class adminlogoutServices {


    logout = async(branch, rollNo) => {

        return new Promise((resolve, reject) => {
            loggedIn = false;
            return resolve({ message: "logout Successfull", data: "" });

        });


    }

}


let adminlogoutService = new adminlogoutServices();

module.exports = adminlogoutService;