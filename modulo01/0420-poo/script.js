// estruturado
var valorHoraE = 50
var tempoEstimadoE = 20
var descontoE = valorHoraE * tempoEstimadoE * (10 / 100)
var custoEstimadoE = valorHoraE * tempoEstimadoE - descontoE
// console.log(custoEstimadoE)

// POO
class Job {
  constructor() {
    this.valorHora = 0;
    this.tempoEstimado = 0;
    this.desconto = 0;
  }

  calcularEstimativa() {
    const custo = this.valorHora * this.tempoEstimado;
    const custoComDesconto = custo - (custo * (this.desconto / 100));
    return custoComDesconto;
  }
}

// Utilizando
const job = new Job();
job.valorHora = 50;
job.tempoEstimado = 20;
job.desconto = 10;
const custoEstimado = job.calcularEstimativa();
// console.log(custoEstimado);

// const job = new Job();
job.valorHora = 50;
job.tempoEstimado = 30;
job.desconto = 10;
const custoEstimadoDois = job.calcularEstimativa();
// console.log(custoEstimadoDois);

// herança
class Veiculo {
  rodas = 4
  mover(direcao) {
    // lógica para mover o veículo
  }

  virar(direcao) {
    // lógica para girar o veículo
  }
}

class Moto extends Veiculo {
  constructor() {
    super() // puxar atributos e métodos do pai
    this.rodas = 2
  }
}
// herança * (sem o this)

// polimorfismo
class Atleta {
  peso
  categoria

  constructor(peso) {
    this.peso = peso;
    this.categoria = this.definirCategoria();
  }

  definirCategoria() {
    if (this.peso <= 50) {
      return 'Infantil';
    } else if (this.peso <= 65) {
      return 'Juvenil';
    } else {
      return 'Adulto';
    }
  }
}

const atleta1 = new Atleta(45);
// console.log("Categoria do Atleta 1:", atleta1.categoria);

const atleta2 = new Atleta(60);
// console.log("Categoria do Atleta 2:", atleta2.categoria);

const atleta3 = new Atleta(70);
// console.log("Categoria do Atleta 3:", atleta3.categoria);


// abstração
// definir 
class Parafuso {
  // Superclasse - Abstrata
  constructor() {
    if (this.constructor === Parafuso) {
      throw new Error('Classe abstrata não pode ser instanciada');
    }
  }

  get tipo() {
    throw new Error('Método "tipo" precisa ser implementado');
  }
}

class Fenda extends Parafuso {
  constructor() {
    super();
  }

  get tipo() {
    return 'fenda';
  }
}

class Philips extends Parafuso {
  constructor() {
    super();
  }

  get tipo() {
    return 'Philips';
  }
}

// Exemplo de uso:
const parafusoFenda = new Fenda();
// console.log(parafusoFenda.tipo); // Saída: fenda

const parafusoPhilips = new Philips();
// console.log(parafusoPhilips.tipo); // Saída: Philips



// Exemplo em JS 
const cart = {
  quantity: 2,
  total: 20
};

// Maneira errada - modificando diretamente o objeto original
// console.log("Cart (antes da modificação):", cart);
cart.quantity = 3;
// console.log("Cart (depois da modificação errada):", cart);

// Maneira certa - criando um novo objeto com a propriedade modificada
const newCart = { ...cart, quantity: 3 };
// console.log("New Cart:", newCart);

// import React, { useState } from 'react';
// const [amount, setAmount] = useState(0);

// Mau exemplo: tentando modificar diretamente o estado
// Não é permitido.
// amount=2;

// Bom exemplo: usando a função de atualização do estado
// setAmount(2);

// console.log(amount)



// ---------------------------------------------------------------
// Função independente
function somar(a, b) {
  return a + b;
}

// Exemplo de uso
const resultado = somar(3, 4); // O resultado será 7
// console.log(resultado); // Saída: 7


// ---------------------------------------------------------------
// Função pura
// Ela sempre produz o mesmo resultado quando os mesmos argumentos são passados ​​a ela (determinismo).
// Ela não produz efeitos colaterais observáveis, como modificar variáveis globais ou fazer chamadas de rede.
function dobrar(numero) {
  return numero * 2;
}

// Exemplo de uso
const resultado2 = dobrar(5); // O resultado será 10
// console.log(resultado2); // Saída: 10



// ---------------------------------------------------------------
// First-class function
const sayMyName = () => console.log('Marcell')
const runFunction = fn => fn()
// sayMyName()
// runFunction(sayMyName)
// runFunction(() => console.log(1 + 1))
// console.log(runFunction(Math.random))
// console.log(runFunction(Math.random))



// ---------------------------------------------------------------
// Higher-order function
// Uma função de ordem superior (higher-order function) é uma função que pode aceitar outras funções como argumentos e/ou retornar funções. Aqui está um exemplo simples de uma função de ordem superior em JavaScript:

// Função de ordem superior
function operacaoMatematica(x, y, operacao) {
  return operacao(x, y);
}

// Funções que serão passadas como argumentos
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

// Exemplos de uso
const resultadoSoma = operacaoMatematica(5, 3, soma); // Chama a função soma
// console.log(resultadoSoma); // Saída: 8

const resultadoSubtracao = operacaoMatematica(10, 4, subtracao); // Chama a função subtracao
// console.log(resultadoSubtracao); // Saída: 6

// outro exemplo:
// Exemplo com numbers
const numbers = [2, 4, 8, 16];
const square = num => num * num;
const squaredNumbers = numbers.map(square);
console.log(squaredNumbers); // Saída: [4, 16, 64, 256]

// Exemplo de uma função de retorno 
// (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait);
pause(600)(() => console.log('waiting 600ms'))
const wait200 = pause(200);
const wait1000 = pause(1000);
wait200(() => console.log('Esperando 200ms'));
wait1000(() => console.log('Esperando 1s'));




// ---------------------------------------------------------------
// composição de funções





