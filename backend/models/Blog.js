const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true }, // markdown content
  date: { type: Date, default: Date.now },
  author: { type: String, default: "Saurav Shinde" },
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }]
});

module.exports = mongoose.model("Blog", BlogSchema);