const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log('DB connection successful');
    } catch (error) {
        console.log(error);
        throw new Error('Error a inicializar la base de datos');
    }
}

module.exports = {
    dbConnection
}