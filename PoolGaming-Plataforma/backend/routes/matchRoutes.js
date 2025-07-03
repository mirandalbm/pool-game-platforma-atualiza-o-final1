const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const auth = require('../middleware/auth');

router.post('/', auth, matchController.createMatch);
router.get('/', matchController.listMatches);

module.exports = router;
