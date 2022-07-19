const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("base de datos ejecutandose sin problemas")

    } catch (error) {
        console.log(error);
        throw new Error(`Base de datos no disponible`)
    }
}

module.exports = {
    dbConnection
}