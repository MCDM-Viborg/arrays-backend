import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const productScheme = new Schema({
  title: { type: String, required: true },
  category: { type: String, default: "" },
  image: { type: String, default: "" },
  price: { type: Number, default: 0 },
});

export default mongoose.models.users ||
  mongoose.model("product", productScheme);
