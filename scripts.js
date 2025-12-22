const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir que o Express entenda JSON
app.use(express.json());

// Nosso "Banco de Dados" temporário (em memória)
let usuarios = [
    { id: 1, nome: "João Silva", cargo: "Desenvolvedor" },
    { id: 2, nome: "Maria Souza", cargo: "Designer" }
];

// ROTA 1: Listar todos os usuários (GET)
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

// ROTA 2: Criar um novo usuário (POST)
app.post('/usuarios', (req, res) => {
    const { nome, cargo } = req.body;
    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        cargo
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// ROTA 3: Buscar um usuário específico por ID (GET)
app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});