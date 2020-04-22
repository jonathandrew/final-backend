const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: { type: String, trim: true },
});

module.exports = mongoose.model("Character", CharacterSchema);
