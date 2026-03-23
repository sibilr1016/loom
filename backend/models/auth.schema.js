import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: String,
    phoneNumber: String,
    email: String,
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },
    addresses: [
      {
        firstName: String,
        lastName: String,
        address: String,
        apartment: String,
        city: String,
        state: String,
        pinCode: String,
        country: String,
      },
    ],
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);

export default User;
