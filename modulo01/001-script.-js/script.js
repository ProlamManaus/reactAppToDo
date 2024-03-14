// Obtendo a data atual
// Creating a new Date object
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Os meses são indexados a partir de 0, então somamos 1
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
var second = currentDate.getSeconds();

// Array com os nomes dos dias da semana
// Array with the names of the days of the week
var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Getting the day of the week number (0 for Sunday, 1 for Monday, etc.)
var numeroDiaSemana = currentDate.getDay();
var dayOfWeekNumber = currentDate.getDay();

// Getting the name of the day of the week using the day of the week number as the index of the array
var nomeDiaSemana = diasDaSemana[numeroDiaSemana];
var dayOfWeekName = daysOfWeek[dayOfWeekNumber];

// console.log("Hoje é " + nomeDiaSemana);
// console.log("Today is " + dayOfWeekName);

// Obtendo o dia e o mês atual
day = (day < 10) ? "0" + day : day;
month = (month < 10) ? "0" + month : month;
hour = (hour < 10) ? "0" + hour : hour;
minute = (minute < 10) ? "0" + minute : minute;
second = (second < 10) ? "0" + second : second;
var hours = hour + ":" + minute + ":" + second

const person = {
  name: 'John',
  age: 30,
  weight: 88.6,
  isAdmin: true
}
// console.log("Objeto: ", person.name, "- Objeto: ", person.isAdmin)

const animals = [
  'Lion',
  'Monkey',
  'Dog',
  'Cat',
]
// console.log(`array: posição 0, ${animals[0]} total ${animals.length}`)


// Exibindo no console
console.log(`Executa em ${day}/${month}/${year} - ${hours}`)
// console.log(`tipo variável: ${typeof hours}`)

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message');

  message.innerHTML = 'Login successful!';
  message.style.color = 'green';

  // if (username === 'user' && password === 'password') {
  //   message.innerHTML = 'Login successful!';
  //   message.style.color = 'green';
  // } else {
  //   message.innerHTML = 'Invalid username or password';
  //   message.style.color = 'red';
  // }

});

// Frases multinacionais
function createPhrases() {
  console.log('Estudar é muito bom.')
  console.log('Paciência tem um preço.')
  console.log('Revisão é a mãe do aprendizado.')
}

// createPhrases()
// console.log("Today is " + dayOfWeekName)



const a = 6
const sum = function (a) {
  console.log(`Valor de a = ${a}`)
  return a + a
}

// console.log(`soma: ${a} + ${a} = ${sum(a)}`)



let subject = 'create video'

function createThink(subject) {
  subject = 'video'
  return subject
}
// console.log(subject)
// console.log(createThink(subject))





// function hoisting
// sayMyName()
function sayMyName() {
  console.log('ok')
}
// ERRO: 
// sayMyNameCont()
const sayMyNameCont = function () {
  console.log('ok')
}




// arrow function (does not suffer from hoisting)
// ERRO: 
// sayMyNameArrow()

const sayMyNameArrow = (name) => {
  console.log(name)
}
// sayMyNameArrow('arrow function')




// callback function
function sayMyNameCallback(name) {
  console.log('antes callback')
  console.log(name)
  console.log('depois callback')
}

// sayMyNameCallback(
//   () => {
//     console.log('função callback')
//   }
// )




// function constructor
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " andar"
  }
}

const marcell = new Person('Marcell')
const ricardo = new Person('Ricardo')
// console.log(marcell.walk())
// console.log(ricardo)



// Prototype




const aa = '9'
// console.log(Number(aa)+5)

let string = '123'
// console.log(Number(string)+123)
let number = 321
// console.log(String(number)+123)

let word = 'Procoating'
// console.log(word.length)
let number_a = 1234
// console.log(String(number_a).length)

let number_b = 743.3433344
// console.log(number_b.toFixed(2).replace(".", ","))


let phrase = "Eu quero Estudar mais, todos as horas!"
let myArray = phrase.split(" ")
let resulte = myArray.join("_")
// console.log(myArray) 
// console.log(toLowerCase()) 
// =====================================
// console.log(phrase.includes("estudar"))

phrase_toLowerCase = phrase.toLowerCase()
// console.log(phrase_toLowerCase.includes("estudar"))

// console.log(phrase.includes("correr"))



// contar elementos de um Array
// console.log(['a', 'b', 'c', 1].length)



let word_a = "manipulação"
let word_b = Array.from(word_a)
// console.log(word_b)


let number_c = ['1', '2', '3']
// console.log(number_c)

number_c.push("4") // adiciona no final
// console.log(number_c)

number_c.unshift("0") // adiciona no inicio
// console.log(number_c)

number_c.pop() // remove do final
// console.log(number_c)

number_c.shift() // remove do inicio
// console.log(number_c)


number_slice = number_c.slice(1, 3) // onde começa, quanto pega(nao conta do zero)
// console.log(number_slice) // 2 e 3

number_slice = number_c.slice(0, 2) // onde começa, quanto pega(nao conta do zero)
// console.log(number_slice) // 1 e 2

let number_e = ['0', '1', '2', '3', '4']
// console.log(number_e.splice(4, 1)) // remover (posição, quantidade)
// console.log(number_e)

let number_d = ['0', '1', '2', '3', '4']
// console.log(number_d)

let index = number_d.indexOf('2')
// console.log(index)
number_d.splice(index, 1)
// console.log(number_d)



// console.log(true ? 'true' : 'false')


let name_a = new String('Marcell')
name_a.SurName = 'Souza'
let age_a = new Number(52)
const fullName = `My name is ${name_a} ${name_a.SurName} and I am ${age_a} years old`
// console.log(fullName)

let dates = new Date('2024-12-01')
// console.log(dates.__proto__)
// console.log(dates.getMinutes())


// console.log(typeof "Marcell")
const person_prolam = {
  name: 'Marcell',
  age: 52,
}
delete person_prolam.age
// console.log(person_prolam)
// console.log(person_prolam.name)
// console.log(person_prolam.age) // foi deletada



let increment = 0
// console.log(increment) // 0
// console.log(increment++) // 0 = incrementa de depois
// console.log(++increment) // 2 = incrementa antes

let decrement = 5
// console.log(decrement) // 5
// console.log(decrement--) // 5 = decrementa de depois
// console.log(--decrement) // 3 = decrementa antes





let one = 1
let two = 2

// console.log(one === 1)
// console.log(one === "1")

// console.log(two !== 2)
// console.log(two !== "2")

// console.log(one > two)

// console.log(one >= 1) // one = 1 ja da true
// console.log(two >= 2) // two = 2 ja da true

// console.log(one < two)

// console.log(one <= two)
// console.log(one <= 1)
// console.log(one <= 0)





let pao = true
let queijo = true

// AND  &&
// console.log(pao && queijo) // somente true e true = true

// OR  ||
// console.log(pao || queijo) // pasta um ser true = true

// NOT !
// console.log(!pao) // trocando o valor para false






// console.log(true == 1)
// console.log(true === 1)

// console.log(false == 0)
// console.log(false === 0)





// switch
let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 1:
    nomeDoDia = 'Segunda-feira';
    break;
  case 2:
    nomeDoDia = 'Terça-feira';
    break;
  case 3:
    nomeDoDia = 'Quarta-feira';
    break;
  case 4:
    nomeDoDia = 'Quinta-feira';
    break;
  case 5:
    nomeDoDia = 'Sexta-feira';
    break;
  case 6:
    nomeDoDia = 'Sábado';
    break;
  case 7:
    nomeDoDia = 'Domingo';
    break;
  default:
    nomeDoDia = 'Dia inválido';
}

// console.log('O dia é: ' + nomeDoDia);


function calculates(numberOne, operator, numberTwo) {
  let result

  switch (operator) {
    case '+':
      result = numberOne + numberTwo
      break
    case '-':
      result = numberOne - numberTwo
      break
    case '*':
      result = numberOne * numberTwo
      break
    case '/':
      result = numberOne / numberTwo
      break
    default:
      console.log('Erro! Operador Inválido')
      break
  }
  return result
}

// console.log(calculates(4, '+', 4))
// console.log(calculates(4, '-', 4))
// console.log(calculates(4, '*', 4))
// console.log(calculates(4, '/', 4))
// console.log(calculates(4, 'v', 4))





// throw
function sayMyName_aa(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
    // throw new Error('Nome é obrigatório')
  }
  // console.log(`Nome é ${name}`)
}
// sayMyName_aa() // erro: try  catch é obrigatório!
// console.log('não continua a aplicação, acabou com a aplicação!')

// try ... catch
try {
  sayMyName_aa('Marcell')
  // sayMyName_aa('')
} catch (error) {
  // console.log(error)
}
// console.log('Apos a função terminar.')





// Estrutura de repetição
// for
for (let i = 0; i < 10; i++) {
  // console.log(i)
}

for (let i = 1; i <= 10; i++) {
  // console.log(i)
}

for (let i = 5; i > 0; i--) {
  // console.log(i)
}

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    // console.log(`para no ${i}`)
    break
  } else {
    // console.log(i)
  }
}

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    // console.log(`para no ${i}`)
    break
  }
  // console.log(i)
}

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    // console.log(`Pula o ${i}`)
    continue
  }
  // console.log(i)
}





// Estrutura de repetição
// while
let i = 1
while (i <= 5) {
  // console.log(i)
  i++
}





// for / of
let name_first = 'Prolam'
let names = ['João', 'Paulo', 'Pedro']

// for(let char of name_first) {
for (let name of names) {
  // console.log(char) // imprimi letra por letra Prolam (char)
  // console.log(name) // imprimi todos os nomes
}








// for / in
let person_now =
{
  name: 'John Doe',
  age: 30,
  weight: 88.6
}

for (let property in person_now) {
  // console.log(property) // nome dos campos
  // console.log(person_now[property]) // valor do object
  // console.log(`${property}: ${person_now[property]}`)
}





// Desafios: notas escolares
let punctuation = 59
// let punctuationA = punctuation >= 90 && punctuation <= 100
// let punctuationB = punctuation >= 80 && punctuation <= 89
// let punctuationC = punctuation >= 70 && punctuation <= 79
// let punctuationD = punctuation >= 60 && punctuation <= 69
// let punctuationF = punctuation < 60 && punctuation >= 0
// let punctuationEnd

// if (punctuationA) {
//   punctuationEnd = "A"
// } else if (punctuationB) {
//   punctuationEnd = "B"
// } else if (punctuationC) {
//   punctuationEnd = "C"
// } else if (punctuationD) {
//   punctuationEnd = "D"
// } else if (punctuationF) {
//   punctuationEnd = "F"
// } else {
//   punctuationEnd = "Nota Inválida!"
// }
// console.log(`Punctuation: ${punctuationEnd}`)

// Factory
function getPunctuation(punctuation) {
  // let punctuation = 59
  let punctuationA = punctuation >= 90 && punctuation <= 100
  let punctuationB = punctuation >= 80 && punctuation <= 89
  let punctuationC = punctuation >= 70 && punctuation <= 79
  let punctuationD = punctuation >= 60 && punctuation <= 69
  let punctuationF = punctuation < 60 && punctuation >= 0
  let punctuationEnd

  if (punctuationA) {
    // console.log(punctuation)
    punctuationEnd = "A"
  } else if (punctuationB) {
    punctuationEnd = "B"
  } else if (punctuationC) {
    punctuationEnd = "C"
  } else if (punctuationD) {
    punctuationEnd = "D"
  } else if (punctuationF) {
    punctuationEnd = "F"
  } else {
    punctuationEnd = "Nota Inválida!"
  }
  // console.log(`Punctuation: ${punctuationEnd}`)
  return punctuationEnd
}

let increase = 1 // vai de 1 a 10
while (increase <= 10) {

  let academicGrade = Math.floor(Math.random() * 101); // Randomizando entre 0 e 100
  // let academicGrade = Math.floor(Math.random() * 105) - 2; // Randomizando entre -2 e 102
  // let academicGrade = Math.floor(Math.random() * 121) - 10; // Randomizando entre -10 e 110
  // if(academicGrade === 100) {
    console.log(`${increase}/${academicGrade} - Punctuation: ${getPunctuation(academicGrade)}`)
  // }
  increase++
}

