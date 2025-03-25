import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // const requestUrl = new URL(request.url);
    // const formData = await request.formData();
    // const email = String(formData.get("email"));
    // const password = String(formData.get("password"));

    connectDB().then((res) => {
      console.log("res", res);
    });

    return NextResponse.json({
      message: "Successfully signup",
    });

    // if (error) {
    //   return NextResponse.json({ error: error.message }, { status: 401 });
    // }

    // return NextResponse.json(
    //   { message: "Successfully logged in" },
    //   {
    //     status: 200,
    //     headers: {
    //       Location: requestUrl.origin,
    //     },
    //   }
    // );
  } catch (error) {
    // return NextResponse.json(
    //   { error: "Internal server error" },
    //   { status: 500 }
    // );
  }
}
