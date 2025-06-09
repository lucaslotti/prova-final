const express = require('express');
const cors = require('cors');
const users = require('./mock/users.json');

const app = express();
app.use(cors());

app.get('/usuarios', (req, res) => {
  res.json(users);
});

app.get('/usuarios/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ message: 'Usuário não encontrado' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
