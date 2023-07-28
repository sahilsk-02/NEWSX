import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = "mongodb://localhost:27017/NewsX";
    mongoose.set("strictQuery", false);
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
