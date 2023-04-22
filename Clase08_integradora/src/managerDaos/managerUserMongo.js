const { userModel } = require("./models/users_model.js");

class UserManagerMongo {
    getAllUsers = async () => {
        const resp = await userModel.find().lean()
        // const resp = await userModel.find({}).lean()
        console.log(resp);
        return resp;

    }
    async getUserById(pid){
        return 'GET UserS'
    }
    async addUser(newUser){
        return await userModel.create(newUser) 
    }
    async updateUser(pid, UserToUpdate){
        return 'UPDATE UserOS'
    }
    
    async deleteUser(pid){
        return 'UPDATE Users'
    }
    
}

module.exports = new UserManagerMongo()