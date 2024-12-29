import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/connector";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const requestBody = await request.json();

    const { email, password } = requestBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: "User doesn't exist",
        },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Incorrect password",
        },
        {
          status: 400,
        }
      );
    }

    // creating token for the user
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      loggedIn: true,
    };

    const secret = process.env.TOKEN_SECRET;
    if (!secret) {
      throw new Error(
        "TOKEN_SECRET is not defined in the environment variables."
      );
    }

    const token = await jwt.sign(tokenData, secret, {
      expiresIn: "1d",
    });

    // including userdata in the response
    const response = NextResponse.json({
      message: "Logged in success",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        loggedIn: true,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
};
