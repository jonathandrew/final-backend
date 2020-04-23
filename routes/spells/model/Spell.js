const mongoose = require("mongoose");

const SpellSchema = new mongoose.Schema({
  spell: { type: String },
  effect: { type: String },
  test: { type: String },
});

module.exports = mongoose.model("Spell", SpellSchema);
