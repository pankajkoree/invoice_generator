import mongoose from "mongoose";

export async function connect() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.log(
      "MongoDB connection URI isn't correct. Please correct mongo uri in environment variable"
    );
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    });

    const connection = mongoose.connection

    connection.on("connected",() => {
        
    })
  } catch (error) {
    console.log("error connecting MongoDB connection");
    console.log(error);
    process.exit(1);
  }
}
