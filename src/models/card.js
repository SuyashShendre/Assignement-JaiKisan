import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    trim: true
  },
  cardType: {
    type: String,
    trim: true
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    default: "ACTIVE",
    trim: true
  },
  vision: {
    type: String,
    required: true,
    trim: true
  },
  customerID: {
    type: ObjectId,
    required: true,
    ref: "Customer",
    trim: true
  }
});

export default mongoose.model("Card", cardSchema);
