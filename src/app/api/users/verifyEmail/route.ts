import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/connector";
import User from "@/models/userModel";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const requestBody = await request.json();
    const { token } = requestBody;

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or token expired" },
        { status: 400 }
      );
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json(
      {
        message: "Email verified successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
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
