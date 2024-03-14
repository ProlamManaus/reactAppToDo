const express = require('express')

const app = express()

app.listen('3000')

// app.route('/').get((req, res) => res.send('Start Now'))
// app.route('/sobre').get((req, res) => res.send('Start Now - Sobre'))

// middleware
app.use(express.json())

// app.route('/').post((req, res) => console.log(req.body))
// app.route('/').post((req, res) => res.send(req.body))

let author = "Prolam - Manaus"
// app.route('/').get((req, res) => res.send(author))
app.route('/').get((req, res) => res.send(req.query))
// app.route('/about/user').get((req, res) => res.send(req.query))
app.route('/about/user').get((req, res) => res.send(req.query.id))

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/cidade/:variavel').get((req, res) => res.send(req.params.variavel))


app.route('/').post((req, res) => {
  // console.log(req.body)
  // res.send(req.body)
  // res.send(req.body.nome)
  // res.send(req.body.endereco[0])
  // res.send(req.body)
  const { nome, cidade, endereco } = req.body
  res.send(`Meu nome é ${nome}, moro na cidade de ${cidade}, no bairro ${endereco[0]}.`)
})

app.route('/').put((req, res) => {
  // author = req.body
  author = req.body.author
  res.send(author)
})

app.route('/:identificador').delete((req, res) => {
  // author = ""
  // res.send("apagado: ", req.params.identificador)
  res.send(req.params.identificador)
})


