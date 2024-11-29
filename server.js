const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Usuario } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas CRUD
app.post('/usuarios', async (req, res) => { // Criar um usuário
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
});

app.get('/usuarios', async (req, res) => { // Buscar todos os usuários
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

app.get('/usuarios/:id', async (req, res) => { // Buscar usuario por id
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});

app.put('/usuarios/:id', async (req, res) => { // Atualizar um usuário por id
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        await usuario.update(req.body);
        res.json(usuario);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});

app.delete('/usuarios/:id', async (req, res) => { // Deletar um usuário por id
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        await usuario.destroy();
        res.json({ message: 'Usuário deletado' });
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));


// npx sequelize-cli init = Inicializa o sequelize
// npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string = Cria um modelo
// npx sequelize-cli db:migrate = Cria a tabela no banco de dados conforme o modelo