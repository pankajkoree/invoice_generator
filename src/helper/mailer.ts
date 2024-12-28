import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface sendMailOptions {
  mail: string;
  mailType: string;
  userId: string;
}

export const sendMail = async ({ mail, mailType, userId }: sendMailOptions) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (mailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (mailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPassword: hashedToken,
          verifyPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.mailHost,
      port: process.env.mailPort,
      auth: {
        user: process.env.mailUser,
        pass: process.env.mailPass,
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      from: "tcsuk1998@gmail.com",
      to: mail,
      subject: mailType === "VERIFY" ? "Verify your email" : "reset password",
      html: ` <p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        mailType === "VERIFY" ? "verify your email" : "reset your password"
      }
        or copy and paste the link below in your browser. <br> ${
          process.env.DOMAIN
        }/verifyemail?token=${hashedToken}
        </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("An unknown error occurred");
  }
};