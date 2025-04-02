import { connectDB } from "@/src/lib/db";
import UserStats from "@/src/models/userStats.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const deviceStats = await UserStats.aggregate([
      {
        $group: {
          _id: {
            deviceType: "$device.deviceType",
            osName: "$os.name",
          },
          count: { $sum: 1 },
          devices: {
            $push: {
              model: "$device.model",
              vendor: "$device.vendor",
              osVersion: "$os.version",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          deviceType: "$_id.deviceType",
          osName: "$_id.osName",
          count: 1,
          devices: 1,
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    return NextResponse.json({
      success: true,
      data: deviceStats,
    });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch device statistics" },
      { status: 500 }
    );
  }
}
