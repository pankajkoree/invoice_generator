import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendMail = async ({ mail, mailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("An unknown error occurred");
  }
};
