import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("jwt")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized - No token found" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Authenticated", authenticated: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
