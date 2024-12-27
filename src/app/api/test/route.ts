import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@/database/connector";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connect();
    res.status(200).json({ message: "MongoDB connection successful." });
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to MongoDB.", error });
  }
}
