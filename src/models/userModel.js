import mongoose from "mongoose";
import bcrybt from "bcryptjs";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  }
});

userSchema.methods.comaperPassword = (password, hashedPassword) => {
  return bcrybt.compareSync(password, hashedPassword);
};
module.exports = mongoose.model("User", userSchema);
