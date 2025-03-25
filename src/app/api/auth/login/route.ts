import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/src/models/user.model";
import { connectDB } from "@/src/lib/db";
import { generateToken } from "@/src/lib/utils";

export async function POST(req: NextRequest) {
  connectDB();

  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      {
        status: 400,
      }
    );
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        {
          status: 404,
        }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        {
          status: 401,
        }
      );
    }

    await generateToken(user._id.toString());

    return NextResponse.json({
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
