import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/poolgaming';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('PoolGaming Backend API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import Usuario from './models/Usuario.js'

app.get('/usuarios', async (req, res) => {
  try {
    const lista = await Usuario.find()
    res.json(lista)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários' })
  }
})