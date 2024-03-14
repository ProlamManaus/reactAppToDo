// Importar os módulos necessários
const express = require('express');
const fetch = require('node-fetch');

// Criar uma instância do Express
const app = express();

// fetch('https://api.example.com/data')
fetch('https://api.github.com/users/maykbrito')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar os dados');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

// Iniciar o servidor Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
