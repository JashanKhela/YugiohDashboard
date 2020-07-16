const mongoose = require("mongoose");

const DuelistSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
  },
  wins: {
    type: String,
    required: true,
  },
  losses: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Duelist = mongoose.model("duelist", DuelistSchema);
