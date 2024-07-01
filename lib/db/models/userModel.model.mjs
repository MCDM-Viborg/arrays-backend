import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const userScheme = new Schema({
  name: { type: String },
});

export default mongoose.models.users || mongoose.model("users", userScheme);
