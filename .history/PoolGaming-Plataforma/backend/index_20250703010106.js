import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'

// Modelo do banco
import Usuario from './models/Usuario.js'

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/poolgaming'

// Conexão com o MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Erro ao conectar no MongoDB:', err))

// Rota padrão
app.get('/', (req, res) => {
  res.send('🎱 PoolGaming Backend API está ativa!')
})

// Rota GET: listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const lista = await Usuario.find()
    res.json(lista)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao buscar usuários' })
  }
})

// Rota POST: cadastrar novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body)
    const salvo = await novoUsuario.save()
    res.status(201).json(salvo)
  } catch (err) {
    console.error(err)
    res.status(400).json({ erro: 'Erro ao salvar usuário' })
  }
})

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
})