import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 10,
  },
  DOB: {
    type: Date,
    required: true,
    trim: true
  },
  emailID: {
    type: String,
    required: true,
    trim: true
  },
  customerID: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    required: true,
    trim: true
  }
});

export default mongoose.model("Customer", customerSchema)