const { connect } = require("mongoose");

let url = "mongodb+srv://jorgexd1999:ILcVLrZ4l012WgqY@cluster0.z2wcq6e.mongodb.net/13apr?authSource=admin&replicaSet=atlas-c8q9nr-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

const objConfig = {
    connectDB: async () => {
        try {
            await connect(url);
            console.log("BDD conectada!");
        }
        catch (error) {
            console.log("Error: " + error);
        }
    }
}

module.exports = {
    objConfig
}