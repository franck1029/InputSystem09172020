const mongoose = require("mongoose");

const InputSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Input = mongoose.model("input", InputSchema);
