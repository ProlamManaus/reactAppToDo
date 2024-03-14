// Array
Array = [1, 2, 3] // elementos 1,2,3
//console.log(Array)

// object
const prolam = { name: "Prolam", idade: 50 }; // 2 elementos
//console.log(typeof prolam); // Isso irá imprimir "object"
//console.log(prolam.name, prolam.idade); // Acessando os dados do objeto

// Array
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// console.log(pilotos[0])
// console.log(pilotos[1])

// console.log(pilotos.length)

for (let piloto of pilotos) {
  // console.log(piloto)
}

function listaPilotos(pilotos) {
  for (let piloto of pilotos) {
    // console.log(piloto);
  }
}

pilotos.push('alonso')
listaPilotos(pilotos)

// Não é uma boa opção usar find dentro de um array 
// (se ele for grande, por exemplo)
// const acharSenna = pilotos.find(piloto => piloto === 'Senna');
// console.log(acharSenna ? `Achei o ${acharSenna}` : 'Não achei');

// Queue

// 1: Modelando
class Queue {
  constructor() {
    this.data = []
  }
  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila!`)
  }
  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

// 2: Utilizando
const fila = new Queue()

fila.enqueue('Marcell')
fila.enqueue('Pedro')
fila.enqueue('Hadassa')
fila.dequeue()
fila.dequeue()

// console.log(fila.data);
console.log(fila.data.join(', '));


