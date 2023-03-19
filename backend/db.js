const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/newsmedia';

mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => console.log("\nConnected to Mongo Successfully!"));
}

module.exports = connectToMongo;