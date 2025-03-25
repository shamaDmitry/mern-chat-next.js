import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    (await cookies()).delete("jwt");

    return NextResponse.json({
      message: "Successfully logout",
    });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { error: "Internal server error", message: error },
      { status: 500 }
    );
  }
}
