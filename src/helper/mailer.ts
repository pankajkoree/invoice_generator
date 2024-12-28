import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

interface sendMailOptions {
  mail: string;
  mailType: string;
  userId: string;
}

export const sendMail = async ({ mail, mailType, userId }: sendMailOptions) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (mailType === "VERIFY") {
      await User.findByIdAndUpdate(userId);
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("An unknown error occurred");
  }
};
