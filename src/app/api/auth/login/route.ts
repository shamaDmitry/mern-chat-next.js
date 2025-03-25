import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      message: "Successfully login",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
