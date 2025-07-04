db = db.getSiblingDB('poolgaming');

db.usuarios.insertMany([
  { nome: "Leandro", nivel: "admin", email: "leandro@example.com" },
  { nome: "Camila", nivel: "user", email: "camila@example.com" },
  { nome: "João", nivel: "user", email: "joao@example.com" }
]);