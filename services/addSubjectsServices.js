class addSubjectsServices {


    addSubjects = async(adminId, branch, semester, subject1, subject2, subject3, subject4, subject5, subject6) => {

        return new Promise((resolve, reject) => {

            let Data = {

                adminId: adminId,
                branch: branch,
                semester: semester,
                subject1: subject1,
                subject2: subject2,
                subject3: subject3,
                subject4: subject4,
                subject5: subject5,
                subject6: subject6

            }

            console.log(Data);
            db.collection(branch + '_subjects').updateOne({ semester: semester }, { $set: Data }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        console.log(semester + '_subjects');
                        return resolve({ message: "Insertion successfull", data: result.ops });

                    }
                } catch (err) {
                    return reject({ message: "Error While Registering data", error: "" });
                }

            })

        });


    }

}


let addSubjectsService = new addSubjectsServices();

module.exports = addSubjectsService;