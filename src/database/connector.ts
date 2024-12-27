import mongoose from "mongoose";

export async function connect() {
  const mongoUri: string = process.env.MONGO_URI ?? "";

  if (!mongoUri) {
    console.log(
      "MongoDB connection URI isn't correct. Please correct mongo uri in environment variable"
    );
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error : " + err);
      process.exit(1);
    });
  } catch (error) {
    console.log("error connecting MongoDB connection");
    console.log(error);
    process.exit(1);
  }
}
