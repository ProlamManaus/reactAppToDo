const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  const items = [
    {
      title: 'D',
      message: "Palavra D"
    },
    {
      title: 'E',
      message: "Palavra E"
    },
    {
      title: 'F',
      message: "Palavra F"
    },
    {
      title: 'G',
      message: "Palavra G"
    }
  ]
  const subtitle = "uma linguagem"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  })
})

app.get("/sobre", function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log("Rodando")