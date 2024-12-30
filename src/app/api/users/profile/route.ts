import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/connector";
import User from "@/models/userModel";
import { getDataFromToken } from "@/helper/getDataFromToken";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json(
      { message: "User found", data: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
