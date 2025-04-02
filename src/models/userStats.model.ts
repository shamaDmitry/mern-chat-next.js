import mongoose from "mongoose";

const userStatsSchema = new mongoose.Schema(
  {
    userAgent: {
      type: String,
      required: true,
    },
    browser: {
      name: {
        type: String,
        default: "",
      },
      version: {
        type: String,
        default: "",
      },
      major: {
        type: String,
        default: "",
      },
    },
    os: {
      name: {
        type: String,
        default: "",
      },
      version: {
        type: String,
        default: "",
      },
    },
    device: {
      deviceType: {
        type: String,
        default: "",
      },
      model: {
        type: String,
        default: "",
      },
      vendor: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const UserStats =
  mongoose.models?.UserStats || mongoose.model("UserStats", userStatsSchema);

export default UserStats;
