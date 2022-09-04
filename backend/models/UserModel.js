import mongoose from "mongoose";

const USerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    eamil: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true, //for create time and update time
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
