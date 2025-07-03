const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Rotas
const matchRoutes = require('../routes/matchRoutes');
app.use('/api/matches', matchRoutes);


app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ...rotas de cashout, staking, governança...

app.listen(5000, () => console.log('Backend running on port 5000'));
