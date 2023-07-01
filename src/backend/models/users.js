import mongoose from "mongoose";

let UserModel;

try {
  UserModel = mongoose.model("users");
} catch {
  const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    savednotes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usernotes",
    },
  });
  UserModel = mongoose.model("users", UserSchema);
}

export { UserModel };
