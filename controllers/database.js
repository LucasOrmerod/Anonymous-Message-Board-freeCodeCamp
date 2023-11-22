const mongoose = require("mongoose");

const uri = process.env["DB"];

mongoose.connect(uri);

const threadSchema = new mongoose.Schema({
  text: String,
  delete_password: String,
  created_on: Date,
  bumped_on: Date,
  reported: Boolean,
  replies: [Object],
  board: String
});

const ThreadModel = mongoose.model("Thread", threadSchema);

exports.Thread = ThreadModel;