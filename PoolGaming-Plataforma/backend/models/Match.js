const mongoose = require('mongoose');
const MatchSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  result: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Match', MatchSchema);
