const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Reserva } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas CRUD
// Criar uma reserva
app.post('/reservas', async (req, res) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Buscar todas as reservas
app.get('/reservas', async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Buscar uma reserva por ID
app.get('/reservas/:id', async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);
        if (reserva) {
            res.json(reserva);
        } else {
            res.status(404).json({ error: 'Reserva não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar uma reserva por ID
app.put('/reservas/:id', async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);
        if (reserva) {
            await reserva.update(req.body);
            res.json(reserva);
        } else {
            res.status(404).json({ error: 'Reserva não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar uma reserva por ID
app.delete('/reservas/:id', async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);
        if (reserva) {
            await reserva.destroy();
            res.json({ message: 'Reserva deletada' });
        } else {
            res.status(404).json({ error: 'Reserva não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
