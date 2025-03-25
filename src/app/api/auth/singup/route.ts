import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json({
      message: "Successfully signup",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
