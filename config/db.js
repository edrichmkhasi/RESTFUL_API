const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        // Exit process
        process.exit(1);
    }
};

module.exports = connectDB;