const connectDB = async () => {

    const mongoose = require("mongoose");
    require('dotenv').config();
    const db = `mongodb+srv://admin:athermilad2020@ctoc.kqiyj.mongodb.net/CtoC?retryWrites=true&w=majority`
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Mongo Atlas server is ready');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

}
module.exports = connectDB;