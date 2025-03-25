import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
import { connectDB } from "@/src/lib/db";

// export async function POST(request: Request) {
//   try {
//     const requestUrl = new URL(request.url);
//     const formData = await request.formData();
//     const email = String(formData.get("email"));
//     const password = String(formData.get("password"));
//     const cookieStore = cookies();

//     const supabase = createClient(cookieStore);

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 401 });
//     }

//     return NextResponse.json(
//       { message: "Successfully logged in" },
//       {
//         status: 200,
//         headers: {
//           Location: requestUrl.origin,
//         },
//       }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  connectDB();

  return NextResponse.json({ message: "Hello from the server!" });
}
