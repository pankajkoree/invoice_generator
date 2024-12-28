import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/connector";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helper/mailer";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const requestBody = await request.json();

    const { username, email, password } = requestBody;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exits" },
        { status: 400 }
      );
    }

    var salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    await sendMail({ mail, mailType = "VERIFY", userId: savedUser._id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error" },
      { status: 500 }
    );
  }
};
