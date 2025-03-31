import mongoose from "mongoose";

const userStatsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },

    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   lowercase: true,
    // },
    // fullName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   minlength: 6,
    // },
    // profilePic: {
    //   type: String,
    //   default: "",
    // },
    // authProvider: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

const UserStats =
  mongoose.models?.UserStats || mongoose.model("UserStats", userStatsSchema);

export default UserStats;
