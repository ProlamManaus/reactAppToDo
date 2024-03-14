const { response } = require("express");

// callback
function imprimirDado(dado) {
  console.log('outras tarefas')
  console.log(dado)
  console.log(dado())
}

// imprimirDado(1)
// imprimirDado('testo')
// imprimirDado(true)
// imprimirDado(function() {
//   return 'ola mundo'
// })


// setTimeout
// setTimeout(function () {
//   console.log('depois de 1s')
// }, 1000)


// const https = require('https')
// const API = 'https://api.github.com/users/'
// const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
// https.get(API, res => {
// console.log(res.statusCode)
// })
// console.log(API)


// Promise | Resolve, Reject, Result
// let aceitar = true
// let aceitar = false
// console.log('Pedir Uber.')
// const promessa = new Promise((resolve, reject) => {
//   if (aceitar) {
//     return resolve('Carro chegou!')
//   }
//   return reject('Pedido negado!')
// })
// console.log('Aguardando...')
// promessa
//   .then(result => console.log(result))
//   .catch(erro => console.log(erro))
//   .finally(() => console.log("Pedido finalizado!"))



// Função que retorna uma Promise que é resolvida após um certo tempo
function exemploPromise() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona, por exemplo, uma requisição HTTP
    setTimeout(() => {
      // const sucesso = true;
      const sucesso = false;

      if (sucesso) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("A operação falhou!");
      }
    }, 3000); // A operação demorará 3 segundos para ser concluída
  });
}

// Chamando a função exemploPromise
console.log("Iniciando a operação assíncrona...");
exemploPromise()
  .then((mensagem) => {
    console.log("Sucesso:", mensagem);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(() => {
    console.log("A operação foi finalizada."); // Este bloco será executado independentemente do resultado da Promise
  });



// fetch('https://api.github.com/users/maykbrito')
// fetch('https://api.github.com/users/mllsouza')
//   .then(response => {
//     response.json()
//       .then(data => {
//         fetch(data.repos_url)
//           .then(res => res.json()
//             .then(d => console.console.log(d)))
//           .catch(e => console.error(e))
//       })
//   })

// fetch('https://api.github.com/users/mllsouza')
//   .then(response => response.json())
//   .then(data => {
//     fetch(data.repos_url)
//       .then(res => res.json()
//         .then(d => console.console.log(d)))
//       .catch(e => console.error(e))

//   })

fetch('https://api.github.com/users/mllsouza')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.console.log(d))
  .catch(e => console.error(e))




