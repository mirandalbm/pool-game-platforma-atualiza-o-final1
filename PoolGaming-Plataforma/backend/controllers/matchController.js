const Match = require('../models/Match');

exports.createMatch = async (req, res) => {
  const { player1, player2, result } = req.body;
  const match = new Match({ player1, player2, result });
  await match.save();
  res.status(201).json(match);
};

exports.listMatches = async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
};
