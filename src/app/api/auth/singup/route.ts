import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, fullName, password } = body;

  try {
    if (!email || !fullName || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      message: "Successfully singup",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
