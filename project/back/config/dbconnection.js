const mongoose = require("mongoose");
// password = Shruti12345

const connectDB = async () => {
  try {

    // await mongoose.connect("mongodb+srv://shrutikhannukar1020:Shruti@2003@beautyparlour.ea3l3.mongodb.net/parlour")
    await mongoose.connect('mongodb+srv://shrutikhannukar1020:Shruti12345@beautyparlour.fsqg5.mongodb.net/')

    // await mongoose.connect('mongodb+srv://shrutikhannukar1020:Shruti@2003@parlour.xkcbc.mongodb.net/parlour')

    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err);
    process.exit(1);
    
  }
};

module.exports = connectDB;