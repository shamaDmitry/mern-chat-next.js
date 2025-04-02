import UserStats from "@/src/models/userStats.model";
import { connectDB } from "../db";
import { UAParser } from "ua-parser-js";

export async function saveUserStats(userAgent: string) {
  try {
    await connectDB();

    const { device, os, browser } = UAParser(userAgent);

    const userStats = await UserStats.create({
      userAgent: userAgent || "",
      browser: {
        name: browser.name || "",
        version: browser.version || "",
        major: browser.major || "",
      },
      os: {
        name: os.name || "",
        version: os.version || "",
      },
      device: {
        deviceType: device.type || "",
        model: device.model || "",
        vendor: device.vendor || "",
      },
    });

    return userStats;
  } catch (error) {
    console.error("Failed to save user stats:", error);
  }
}
