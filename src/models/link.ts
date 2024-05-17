import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.models.Link || mongoose.model("Link", linkSchema);
