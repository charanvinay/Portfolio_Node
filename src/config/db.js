import mongoose from "mongoose";

const connectDB = async () => {
  const URI = process.env.DB_URI;
  const dbName = process.env.DATABASE;
  try {
    const con = await mongoose.connect(URI, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
