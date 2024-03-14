const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

// executar: node .
// https://api.github.com/users/mllsouza

// middleware
// app.use(express.json())

let author = "Prolam 2024.03 - Manaus."
app.route('/').get((req, res) => {
  // res.send(author)
  axios.get('https://api.github.com/users/mllsouza')
    // .then(result => res.send(result.data))
    // .then(result => res.send(result.data.html_url))

    // imagem sua do github
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})




