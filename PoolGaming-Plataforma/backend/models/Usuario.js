// backend/models/Usuario.js
import mongoose from 'mongoose'

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  nivel: String,
  email: String
})

export default mongoose.model('Usuario', UsuarioSchema)