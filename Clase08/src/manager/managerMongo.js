const fs = require("fs");
const { userModel } = require("../models/users_model");

class ManagerMongo {


    getUsers = async () => await userModel.find();


    getRecordById = async (id) => {
     
    }


    
    createUser = async (newRecord) => {
        return await userModel.create(newRecord);
    }

  
    updateUser = async (uid, userToReplace) => {
      return await userModel.updateOne({_id: uid}, userToReplace);
    }
 
    deleteRecord = async (uid) => {
        return await userModel.deleteOne({_id: uid});
     
    }
}

module.exports = {
    ManagerMongo
}
