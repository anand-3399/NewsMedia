const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/newsmedia';

mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => console.log("\nConnected to Mongo Successfully!"));
}

module.exports = connectToMongo;